import { renderLegalPage } from '../LegalPage'

// 利用規約の英訳（../terms.tsx の日本語版が正本）。日本語版を改定したら、本ページと
// アプリの英語版（shot-ai-trace-frontend）も同じ内容に改める。第4条は国ごとに価格が
// 違うため金額を書かず、購入時にストアに表示される価格とする。日付は英語の書き方にする。
renderLegalPage(
  'Terms of Use',
  [
    {
      heading: 'Article 1 (Application)',
      body: 'These Terms set out the conditions of use of the app "Shot AI Trace" (the "App") between users and the operator of the App (the "Operator"). By using the App, you are deemed to have agreed to these Terms.',
    },
    {
      heading: 'Article 2 (Services)',
      body: 'The App provides features that analyze a video you select and create and save a video with the ball-flight trace drawn on it. The accuracy of the analysis and of the generated results is not guaranteed. Features may change without notice.',
    },
    {
      heading: 'Article 3 (Handling of Videos and Data)',
      body: "Video analysis and export are performed entirely on your device. Your videos and analysis results are never sent to the Operator's servers. For details, please see the Privacy Policy.",
    },
    {
      heading: 'Article 4 (Fees and Number of Saves)',
      body: 'All features of the App are the same on every plan; the plans differ only in the number of videos you can save (each a "save"). (1) Free plan: up to 5 saves in total, free of charge. (2) Lifetime plan (one-time purchase): unlimited saves. (3) Monthly subscription: 10 saves per month (unused saves do not carry over to the next month, and each month is determined by your device\'s date and time settings). A save is counted only when it succeeds, and your free saves are used before your subscription saves. Because save usage is recorded on your device, it is not carried over when you switch to a new device (the purchase itself can be carried over with "Restore Purchases"). Prices are those displayed in the App Store or Google Play at the time of purchase. If you are a minor, please obtain the consent of a parent or guardian before purchasing a paid plan.',
    },
    {
      heading: 'Article 5 (Automatic Renewal and Cancellation of Subscriptions)',
      body: 'The subscription is billed monthly and renews automatically every month until you cancel it. On the App Store, it renews automatically unless you cancel it in your App Store (Apple ID) subscription settings at least 24 hours before the end of the current period. On Google Play, you can cancel it at any time in your Google Play (Google Account) subscription settings, and after you cancel, you will not be renewed or charged again. In either case, after you cancel, you can continue to use the subscription until the end of the current period. Deleting the App does not cancel your subscription.',
    },
    {
      heading: 'Article 6 (Payment and Refunds)',
      body: "Payments are processed through Apple (App Store) or Google (Google Play). Refunds are subject to each company's policies. For purchases made on the App Store, please request a refund from Apple (reportaproblem.apple.com). For purchases made on Google Play, you can request a refund through Google Play's refund request (support.google.com/googleplay/answer/15574897) within 48 hours of purchase; if more than 48 hours have passed, please contact us at the address below. The Operator does not issue refunds for reasons of your own convenience, except where the cause is attributable to the Operator or where otherwise required by law.",
    },
    {
      heading: 'Article 7 (Prohibited Conduct)',
      body: 'You must not engage in any conduct that violates laws or regulations or public order and morals, use videos that infringe the rights of third parties (such as copyrights or rights to their likeness), copy, modify, or reverse engineer the App, or interfere with the operation of the App.',
    },
    {
      heading: 'Article 8 (Intellectual Property Rights)',
      body: 'Intellectual property rights relating to the App belong to the Operator or the rightful rights holders. You may freely use videos you create with the App, including posting them on social media, as long as they are based on videos to which you hold the rights.',
    },
    {
      heading: 'Article 9 (Limitation of Liability)',
      body: "Except in cases of willful misconduct or gross negligence by the Operator, the Operator's liability for any damage you incur in connection with the App is limited to the total amount of fees you paid for the App during the 12 months before the damage occurred. Any dispute with a third party arising from the use of videos you create shall be resolved at your own responsibility and expense.",
    },
    {
      heading: 'Article 10 (Changes, Suspension, and Termination of the Service)',
      body: 'The Operator may change, suspend, or terminate the App without notice. However, if the Operator ends the provision of paid features, it will announce this in the App or on this page a reasonable period in advance.',
    },
    {
      heading: 'Article 11 (Changes to These Terms)',
      body: 'The Operator may change these Terms if the change is in the general interest of users, or if the change does not conflict with the purpose of these Terms and is reasonable in light of the necessity of the change, the appropriateness of the changed content, and other circumstances. When making a change, the Operator will announce the changed content and its effective date in the App or on this page a reasonable period before the effective date. The changed Terms take effect on the effective date.',
    },
    {
      heading: 'Article 12 (Governing Law and Jurisdiction)',
      body: "These Terms are governed by the laws of Japan. Any dispute arising in connection with the App shall be subject to the exclusive jurisdiction of the court having jurisdiction over the Operator's location as the court of first instance.",
    },
    {
      heading: 'Revision History',
      body: (
        <>
          <p>Established: July 16, 2026</p>
          <p>Revised: October 12, 2026</p>
          <p>Contact: york.web.co273@gmail.com</p>
        </>
      ),
    },
  ],
  {
    lang: 'en',
    langLink: { href: '../terms.html', label: '日本語', hrefLang: 'ja' },
    intro: (
      <p>
        This is an English translation of the Japanese Terms of Use. If there is any discrepancy
        between the English version and the{' '}
        <a href="../terms.html" hrefLang="ja" className="font-bold underline">
          Japanese version
        </a>
        , the Japanese version prevails.
      </p>
    ),
  },
)
