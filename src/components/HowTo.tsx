import { useLayoutEffect, useRef, useState } from 'react'
import { steps } from '../data/steps'
import { FadeIn } from './FadeIn'

// モバイルスライダーの寸法。GAP は track の gap-3（12px）・SLIDE_RATIO は
// スライドの w-[80%] と一致させること。
const GAP = 12
const SLIDE_RATIO = 0.8
// この距離（px）以上ドラッグして離すと1枚送る。
const SWIPE_THRESHOLD = 50

function StepCardBody({ step }: { step: (typeof steps)[number] }) {
  return (
    <>
      <div className="font-display text-[clamp(12px,1.2vw,14px)] font-bold text-primary">
        {step.label}
      </div>
      <div className="mt-2.5 text-[clamp(15.5px,1.6vw,19px)] font-bold text-ink">{step.title}</div>
      <p className="mt-2 text-[clamp(12px,1.2vw,13.5px)] leading-[1.8] text-muted">{step.body}</p>
    </>
  )
}

export function HowTo() {
  // モバイルは自由スクロールではなく「必ず1枚がセンターに止まる」ページャー。
  // ネイティブスクロールを使わず、active インデックス + translateX で位置を決める。
  const viewportRef = useRef<HTMLDivElement>(null)
  const [viewportW, setViewportW] = useState(0)
  const [active, setActive] = useState(0)
  const [dragX, setDragX] = useState(0)
  const pointer = useRef<{ startX: number; moved: boolean } | null>(null)
  // ドラッグ直後の click でカードタップ移動が誤発火しないよう抑止する。
  const suppressClick = useRef(false)

  useLayoutEffect(() => {
    const el = viewportRef.current
    if (!el) return
    setViewportW(el.clientWidth)
    const observer = new ResizeObserver(() => setViewportW(el.clientWidth))
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const go = (index: number) => setActive(Math.max(0, Math.min(steps.length - 1, index)))

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    pointer.current = { startX: e.clientX, moved: false }
    e.currentTarget.setPointerCapture(e.pointerId)
  }
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const p = pointer.current
    if (!p) return
    const dx = e.clientX - p.startX
    if (Math.abs(dx) > 5) p.moved = true
    setDragX(dx)
  }
  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    const p = pointer.current
    if (!p) return
    const dx = e.clientX - p.startX
    if (Math.abs(dx) > SWIPE_THRESHOLD) go(active + (dx < 0 ? 1 : -1))
    suppressClick.current = p.moved
    pointer.current = null
    setDragX(0)
  }
  const onPointerCancel = () => {
    pointer.current = null
    setDragX(0)
  }

  const onCardClick = (index: number) => {
    if (suppressClick.current) {
      suppressClick.current = false
      return
    }
    go(index)
  }

  // active のスライド中心がビューポート中心に来る translateX（＋ドラッグ中の追従分）
  const slideW = viewportW * SLIDE_RATIO
  const trackX = viewportW / 2 - slideW / 2 - active * (slideW + GAP) + dragX
  const dragging = pointer.current?.moved ?? false

  return (
    <div id="howto" className="mx-auto max-w-content pt-[clamp(56px,8vw,96px)]">
      <FadeIn>
        <div className="px-5 text-center md:px-12">
          <div className="font-display text-[clamp(11px,1vw,12px)] font-semibold tracking-[0.16em] text-primary">
            HOW IT WORKS
          </div>
          <h2 className="mt-3.5 text-[clamp(24px,3.3vw,38px)] font-black text-ink">
            使い方は、3ステップ。
          </h2>
        </div>

        {/* モバイル: 1枚ずつ送るスライダー（スワイプ・チラ見えカードのタップ・ドット） */}
        <div
          ref={viewportRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerCancel}
          className="mt-[clamp(20px,4vw,44px)] touch-pan-y overflow-hidden select-none md:hidden"
        >
          <div
            className="flex gap-3"
            style={{
              transform: `translateX(${trackX}px)`,
              transition: dragging ? 'none' : 'transform 300ms ease',
            }}
          >
            {steps.map((step, index) => (
              <div
                key={step.label}
                onClick={() => onCardClick(index)}
                className="w-[80%] flex-none rounded-[18px] bg-step p-[clamp(20px,2.5vw,30px)]"
              >
                <StepCardBody step={step} />
              </div>
            ))}
          </div>
        </div>
        {/* ドットインジケーター（モバイルのみ） */}
        <div className="mt-4 flex justify-center gap-2 md:hidden">
          {steps.map((step, index) => (
            <button
              key={step.label}
              type="button"
              aria-label={`ステップ${index + 1}を表示`}
              onClick={() => go(index)}
              className={`size-2 rounded-full transition-colors ${
                index === active ? 'bg-primary' : 'bg-[#d9e2da]'
              }`}
            />
          ))}
        </div>

        {/* PC: 3カラムグリッド（従来どおり） */}
        <div className="mt-[clamp(20px,4vw,44px)] hidden md:grid md:grid-cols-3 md:gap-6 md:px-12">
          {steps.map((step) => (
            <div key={step.label} className="rounded-[18px] bg-step p-[clamp(20px,2.5vw,30px)]">
              <StepCardBody step={step} />
            </div>
          ))}
        </div>
      </FadeIn>
    </div>
  )
}
