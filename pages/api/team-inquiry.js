const TEAM_SIZES = new Set(['1-4', '5-10', '11-20', '21+'])
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function clean(value) {
  return typeof value === 'string' ? value.trim() : ''
}

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST')
    return response.status(405).json({
      ok: false,
      error: '仅支持 POST 请求。'
    })
  }

  const teamName = clean(request.body?.teamName)
  const contactName = clean(request.body?.contactName)
  const email = clean(request.body?.email).toLowerCase()
  const teamSize = clean(request.body?.teamSize)
  const notes = clean(request.body?.notes)

  if (!teamName) {
    return response.status(400).json({ ok: false, error: '请填写团队名称。' })
  }

  if (teamName.length > 120) {
    return response.status(400).json({ ok: false, error: '团队名称过长。' })
  }

  if (!contactName) {
    return response.status(400).json({ ok: false, error: '请填写联系人。' })
  }

  if (contactName.length > 80) {
    return response.status(400).json({ ok: false, error: '联系人姓名过长。' })
  }

  if (!EMAIL_PATTERN.test(email) || email.length > 200) {
    return response
      .status(400)
      .json({ ok: false, error: '请填写有效的工作邮箱。' })
  }

  if (!TEAM_SIZES.has(teamSize)) {
    return response
      .status(400)
      .json({ ok: false, error: '请选择有效的团队人数。' })
  }

  if (notes.length > 1000) {
    return response
      .status(400)
      .json({ ok: false, error: '需求说明不能超过 1000 个字符。' })
  }

  // This endpoint intentionally stores nothing and calls no third-party
  // service: the inquiry is recorded in the server log for follow-up.
  console.log(
    '[team-inquiry]',
    JSON.stringify({
      receivedAt: new Date().toISOString(),
      teamName,
      contactName,
      email,
      teamSize,
      notes
    })
  )

  return response.status(201).json({
    ok: true,
    message: '已收到团队询价。'
  })
}
