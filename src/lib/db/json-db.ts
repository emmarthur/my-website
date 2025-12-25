// Simple JSON-based database for development
// In production, replace with a real database (PostgreSQL, MongoDB, etc.)

import fs from 'fs/promises'
import path from 'path'
import { randomUUID } from 'crypto'

const DATA_DIR = path.join(process.cwd(), 'data')

// Ensure data directory exists
async function ensureDataDir() {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true })
  } catch (error) {
    console.error('Error creating data directory:', error)
  }
}

// Generic CRUD operations for JSON files
export class JsonDB {
  private filePath: string

  constructor(collectionName: string) {
    this.filePath = path.join(DATA_DIR, `${collectionName}.json`)
  }

  async init() {
    await ensureDataDir()
    // Create file if it doesn't exist
    try {
      await fs.access(this.filePath)
    } catch {
      await fs.writeFile(this.filePath, JSON.stringify([], null, 2))
    }
  }

  async read(): Promise<any[]> {
    await this.init()
    try {
      const data = await fs.readFile(this.filePath, 'utf-8')
      return JSON.parse(data)
    } catch (error) {
      console.error('Error reading from JSON DB:', error)
      return []
    }
  }

  async write(data: any[]): Promise<void> {
    await this.init()
    await fs.writeFile(this.filePath, JSON.stringify(data, null, 2), 'utf-8')
  }

  async findById(id: string): Promise<any | null> {
    const items = await this.read()
    return items.find((item) => item.id === id) || null
  }

  async findAll(): Promise<any[]> {
    return this.read()
  }

  async create(item: any): Promise<any> {
    const items = await this.read()
    const newItem = {
      ...item,
      id: item.id || randomUUID(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
    items.push(newItem)
    await this.write(items)
    return newItem
  }

  async update(id: string, updates: Partial<any>): Promise<any | null> {
    const items = await this.read()
    const index = items.findIndex((item) => item.id === id)
    if (index === -1) return null

    items[index] = {
      ...items[index],
      ...updates,
      updatedAt: new Date().toISOString(),
    }
    await this.write(items)
    return items[index]
  }

  async delete(id: string): Promise<boolean> {
    const items = await this.read()
    const filtered = items.filter((item) => item.id !== id)
    if (filtered.length === items.length) return false
    await this.write(filtered)
    return true
  }
}

// Export specific collections
export const thoughtsDB = new JsonDB('thoughts')
export const projectsDB = new JsonDB('projects')
export const generatedImagesDB = new JsonDB('generated_images')

