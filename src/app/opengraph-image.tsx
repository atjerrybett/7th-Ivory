import { ImageResponse } from 'next/og'

export const alt = '7th Ivory Productions - Award-Winning African Film Production'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0D0D0D 0%, #1a1a1a 50%, #0D0D0D 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Gold accent line at top */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, #D4AF37, #CD853F, #228B22)',
          }}
        />
        
        {/* Logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              width: '100px',
              height: '100px',
              background: 'linear-gradient(135deg, #D4AF37 0%, #B8860B 100%)',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '60px',
              fontFamily: 'serif',
              fontWeight: 'bold',
              color: '#0D0D0D',
            }}
          >
            7
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '48px', fontWeight: 'bold', color: '#F5F5F0' }}>
              7th Ivory
            </span>
            <span style={{ fontSize: '20px', color: '#888', letterSpacing: '4px', textTransform: 'uppercase' }}>
              Productions
            </span>
          </div>
        </div>

        {/* Tagline */}
        <p
          style={{
            fontSize: '32px',
            color: '#D4AF37',
            textAlign: 'center',
            maxWidth: '800px',
            lineHeight: 1.4,
          }}
        >
          Award-Winning African Film Production
        </p>
        
        {/* Venice badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginTop: '40px',
            padding: '12px 24px',
            background: 'rgba(212, 175, 55, 0.1)',
            borderRadius: '50px',
            border: '1px solid rgba(212, 175, 55, 0.3)',
          }}
        >
          <span style={{ fontSize: '18px', color: '#D4AF37' }}>🏆</span>
          <span style={{ fontSize: '18px', color: '#F5F5F0' }}>Venice Film Festival Selected</span>
        </div>
        
        {/* Location */}
        <p style={{ fontSize: '16px', color: '#666', marginTop: '40px' }}>
          Nairobi, Kenya
        </p>
      </div>
    ),
    {
      ...size,
    }
  )
}
