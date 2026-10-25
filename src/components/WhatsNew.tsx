import { useEffect, useRef } from 'react'
import phoneFrame from '../assets/phone-frame.webp'
import traceDemo from '../assets/trace-demo.mp4'
import traceDemoPoster from '../assets/trace-demo-poster.webp'
import { WHATS_NEW_VERSION, whatsNewItems } from '../data/whatsNew'
import { FadeIn } from './FadeIn'

/**
 * 端末の枠の中で、書き出した動画（弾道線が伸びていく場面）をループ再生する。
 * 枠は画面部分が透明なので、動画を下に敷く。見えている間だけ再生し、
 * PC 用とスマホ用のうち隠れている方は読み込まない。視差効果を減らす設定ではポスター（線を描き終えた場面）のまま。
 */
function PhoneDemo({ className }: { className: string }) {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = ref.current
    if (!video) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    video.muted = true
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { threshold: 0.25 },
    )
    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  return (
    <div className={`relative ${className}`}>
      {/* 画面部分（枠の画像の 22,20 から 596×1262 / 640×1302）より少し大きく敷き、縁は枠で隠す */}
      <video
        ref={ref}
        src={traceDemo}
        poster={traceDemoPoster}
        muted
        loop
        playsInline
        preload="none"
        aria-hidden="true"
        className="absolute top-[1.2%] left-[3%] h-[97.6%] w-[94%] rounded-[14%/6.6%] object-cover"
      />
      <img
        src={phoneFrame}
        alt="打ったボールに弾道線が伸びていく、書き出した動画の再生画面"
        className="relative block w-full"
      />
    </div>
  )
}

/** 新機能セクション（Android 版リリース＋v1.3〜v1.3.1 の新機能）。端末の枠の中で弾道線の動画を流す。 */
export function WhatsNew() {
  return (
    <div id="whatsnew" className="mx-auto max-w-content pt-[clamp(56px,8vw,88px)]">
      <FadeIn>
        <div className="px-5 text-center md:px-12">
          <div className="font-display text-[clamp(11px,1vw,12px)] font-semibold tracking-[0.16em] text-primary">
            WHAT&apos;S NEW
          </div>
          <h2 className="mt-3.5 text-[clamp(24px,3.3vw,38px)] leading-[1.45] font-black text-ink">
            アップデートで、さらに使いやすく。
            <span className="ml-3 inline-block translate-y-[-2px] rounded-full bg-mint px-3 py-[5px] align-middle text-[13px] font-bold text-primary">
              {WHATS_NEW_VERSION}
            </span>
          </h2>
        </div>

        {/* PC: スクショ + 機能リストの2カラム */}
        <div className="hidden items-center gap-14 px-12 pt-11 md:grid md:grid-cols-[300px_1fr]">
          <PhoneDemo className="w-[264px] justify-self-center rounded-[48px] shadow-[0_24px_48px_rgba(20,32,26,0.25)]" />
          <div className="flex max-w-[560px] flex-col gap-8">
            {whatsNewItems.map((item) => (
              <div key={item.title}>
                <div className="inline-block rounded-lg bg-mint px-3 py-[5px] text-[13px] font-bold text-primary">
                  NEW
                </div>
                <div className="mt-3 text-[18px] leading-[1.6] font-bold text-ink">
                  {item.title}
                </div>
                <p className="mt-2 text-[13.5px] leading-[1.8] text-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* モバイル: スクショ → リストの縦積み */}
        <div className="px-5 pt-6 md:hidden">
          <PhoneDemo className="mx-auto w-[180px] rounded-[28px] shadow-[0_18px_36px_rgba(20,32,26,0.25)]" />
          <div className="mt-6 flex flex-col overflow-hidden rounded-2xl border border-line">
            {whatsNewItems.map((item, i) => (
              <div
                key={item.title}
                className={`flex flex-col gap-[5px] px-5 py-[18px] ${
                  i < whatsNewItems.length - 1 ? 'border-b border-line-soft' : ''
                }`}
              >
                <span className="text-[11.5px] font-semibold text-primary">NEW</span>
                <span className="text-[13.5px] font-bold text-ink">{item.title}</span>
                <p className="text-[12.5px] leading-[1.7] text-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </div>
  )
}
