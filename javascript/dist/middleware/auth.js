import { verify } from "../utils/verify_jwt.js";
export function authMiddleware(req, res, next) {
    {
        const token = req.cookies.token;
        try {
            const decoded = verify(token);
            req.user = decoded;
            next();
        }
        catch (err) {
            return res.status(401).json({ error: "Invalid Error" });
        }
    }
}
//# sourceMappingURL=auth.js.map