import { ImageResponse } from 'next/og'

export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 100,
          background: 'linear-gradient(135deg, #D4AF37 0%, #B8860B 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '32px',
          fontFamily: 'serif',
          fontWeight: 'bold',
          color: '#0D0D0D',
        }}
      >
        7
      </div>
    ),
    {
      ...size,
    }
  )
}
