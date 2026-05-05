const cookieExpireDays = Number(process.env.JWT_COOKIE_EXPIRES_IN) || 90

// exports.cookieOptions = {
//     httpOnly: true,
//     secure: true,
//     sameSite: "none",
//     path: "/",
//     domain: '.',
//     maxAge: new Date(Date.now() + cookieExpireDays * 24 * 60 * 60 * 1000),
// }

// FOR LOCALHOST
// exports.cookieOptions = {
//     httpOnly: true,
//     secure: false,
//     sameSite: "lax",
//     path: "/",
//     maxAge: 7 * 24 * 60 * 60 * 1000,
// }

exports.cookieOptions = {
    httpOnly: true,
    secure: true,          // MUST be true on HTTPS (Vercel)
    sameSite: "none",      // REQUIRED for cross-origin
    path: "/",
    maxAge: 7 * 24 * 60 * 60 * 1000,
}
