const multer = require("multer");
const path = require("path");
const AppError = require("../utils/appError");
const crypto = require("crypto");

function createUploader(folder = "profile") {
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, `public/${folder}`);
        },
        filename: (req, file, cb) => {
            const ext = path.extname(file.originalname);

            if (folder === "profile") {
                if (req.file) {
                    return cb(new AppError("Only one profile image allowed", 400));
                }
                const fileName = `profile-${req.user.id}${ext}`;
                return cb(null, fileName);
            }

            const fileName = `${Date.now()}-${crypto.randomBytes(16).toString("hex")}${ext}`;
            cb(null, fileName);
        },
    });

    const fileFilter = (req, file, cb) => {
        const allowed = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
        if (!allowed.includes(file.mimetype)) {
            return cb(new AppError("JPEG/JPG, PNG, and WEBP formats allowed!", 400), false);
        }
        cb(null, true);
    };

    const limits =
        folder === "profile"
            ? { fileSize: 5 * 1024 * 1024, files: 1 }
            : { fileSize: 10 * 1024 * 1024, files: 4 };

    return multer({ storage, fileFilter, limits });
}

module.exports = { createUploader };
