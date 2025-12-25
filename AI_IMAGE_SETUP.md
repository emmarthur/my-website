# AI Image Generation Setup

## Overview

The website includes AI image generation capabilities using **Replicate**, which provides access to Midjourney-style models and other advanced AI image generators.

## Why Replicate Instead of Midjourney?

**Midjourney doesn't have a public API.** However, Replicate offers:
- ✅ **Flux Pro** - Midjourney-quality image generation
- ✅ **Stable Diffusion XL** - High-quality open-source model
- ✅ **Easy API** - Simple integration
- ✅ **Pay-per-use** - Only pay for what you use

## Setup Instructions

### 1. Get Replicate API Token

1. Go to [https://replicate.com](https://replicate.com)
2. Sign up for a free account
3. Navigate to [Account Settings → API Tokens](https://replicate.com/account/api-tokens)
4. Create a new API token
5. Copy the token

### 2. Add to Environment Variables

Add to your `.env.local` file:

```env
REPLICATE_API_TOKEN=your_replicate_api_token_here
```

### 3. Restart Dev Server

```bash
# Stop server (Ctrl+C)
npm run dev
```

## Usage

### Via API

```typescript
POST /api/images/generate
Content-Type: application/json

{
  "prompt": "a beautiful sunset over the ocean, vibrant colors, cinematic",
  "model": "flux", // or "midjourney", "stable-diffusion"
  "width": 1024,
  "height": 1024,
  "num_outputs": 1
}
```

### Via Component

Use the `<ImageGenerator />` component in any page:

```tsx
import { ImageGenerator } from '@/components/ai/ImageGenerator'

export default function MyPage() {
  return (
    <div>
      <ImageGenerator />
    </div>
  )
}
```

## Available Models

- **flux** (default) - Uses Flux Schnell (free tier friendly, fast generation)
- **flux-pro** - Premium Flux Pro model (requires credits, highest quality)
- **midjourney** - Alias for flux-schnell (free tier)
- **stable-diffusion** - Open-source alternative
- **flux-dev** - Development model (free tier)

**Note**: The default model is set to `flux-schnell` which works with Replicate's free tier. For premium quality, you can switch to `flux-pro` after adding credits.

## Pricing

Replicate uses pay-per-use pricing:
- **Flux Schnell** (default): Free tier available, then ~$0.003 per image
- **Flux Pro**: ~$0.04 per image (requires credits)
- **Stable Diffusion**: ~$0.002 per image

**Free Tier**: Replicate offers free credits to get started. Flux Schnell is optimized for the free tier.

Check [Replicate Pricing](https://replicate.com/pricing) for current rates.

## Alternative AI Image APIs

If you want to use other services:

### Stability AI
- Get API key from [https://platform.stability.ai](https://platform.stability.ai)
- Similar quality, different pricing model

### OpenAI DALL-E
- Get API key from [https://platform.openai.com](https://platform.openai.com)
- Very high quality, more expensive

### Leonardo.ai
- Get API key from [https://leonardo.ai](https://leonardo.ai)
- Good quality, competitive pricing

## Security Notes

- ✅ API keys are stored server-side only
- ✅ Never expose tokens in client-side code
- ✅ Rate limiting recommended for production
- ✅ Validate and sanitize user prompts

## Troubleshooting

**Error: "REPLICATE_API_TOKEN not configured"**
- Make sure you added the token to `.env.local`
- Restart your dev server after adding

**Error: "Insufficient credits" or "402 Payment Required"**
- The default model (flux-schnell) should work with free tier
- If you see this error, check your Replicate account billing page
- You may need to add credits or wait for free tier credits to refresh
- Try using 'flux-dev' model which is free tier friendly

**Error: "Failed to generate image"**
- Check your Replicate account has credits (for premium models)
- Verify the API token is correct
- Check Replicate status page
- Try the default 'flux' model which uses flux-schnell (free tier)

**Images not showing**
- Check browser console for errors
- Verify the image URLs are accessible
- Some images may take time to generate

## Example Prompts

Try these prompts to get started:

- "a futuristic cityscape at night, neon lights, cyberpunk style"
- "a serene mountain landscape, golden hour, cinematic"
- "abstract art, vibrant colors, deep sea blue theme"
- "a Ghanaian marketplace, vibrant colors, cultural details"

