(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/CredApp/src/services/learner.service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LearnerService",
    ()=>LearnerService,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/CredApp/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CredApp/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
// Axios instance with base URL and auth header
const api = __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_URL || 'https://credhub.twilightparadox.com',
    headers: {
        'Content-Type': 'application/json'
    }
});
api.interceptors.request.use((config)=>{
    const token = ("TURBOPACK compile-time truthy", 1) ? localStorage.getItem('access_token') : "TURBOPACK unreachable";
    if (token) {
        config.headers.Authorization = "Bearer ".concat(token);
    }
    return config;
}, (error)=>Promise.reject(error));
class LearnerService {
    static async getLearnerCredentials(params) {
        const response = await api.get('/api/v1/learner/credentials', {
            params
        });
        return response.data;
    }
    static async downloadPortfolio() {
        const response = await api.get('/api/v1/learner/download-portfolio', {
            responseType: 'blob'
        });
        return response.data;
    }
    static async createShareLink() {
        let expiresInDays = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 30;
        const response = await api.post('/api/v1/learner/share', {
            expires_in_days: expiresInDays
        });
        return response.data;
    }
}
const __TURBOPACK__default__export__ = LearnerService;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/CredApp/src/components/modals/ShareProfileModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ShareProfileModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CredApp/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CredApp/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/material/esm/Dialog/Dialog.js [app-client] (ecmascript) <export default as Dialog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogTitle$2f$DialogTitle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogTitle$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/material/esm/DialogTitle/DialogTitle.js [app-client] (ecmascript) <export default as DialogTitle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogContent$2f$DialogContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/material/esm/DialogContent/DialogContent.js [app-client] (ecmascript) <export default as DialogContent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogActions$2f$DialogActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogActions$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/material/esm/DialogActions/DialogActions.js [app-client] (ecmascript) <export default as DialogActions>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/material/esm/Button/Button.js [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/material/esm/TextField/TextField.js [app-client] (ecmascript) <export default as TextField>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/material/esm/IconButton/IconButton.js [app-client] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/material/esm/Stack/Stack.js [app-client] (ecmascript) <export default as Stack>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Alert$2f$Alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Alert$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/material/esm/Alert/Alert.js [app-client] (ecmascript) <export default as Alert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/material/esm/CircularProgress/CircularProgress.js [app-client] (ecmascript) <export default as CircularProgress>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Divider$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/material/esm/Divider/Divider.js [app-client] (ecmascript) <export default as Divider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/lucide-react/dist/esm/icons/share-2.js [app-client] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/lucide-react/dist/esm/icons/twitter.js [app-client] (ecmascript) <export default as Twitter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/lucide-react/dist/esm/icons/facebook.js [app-client] (ecmascript) <export default as Facebook>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$src$2f$services$2f$learner$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CredApp/src/services/learner.service.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function ShareProfileModal(param) {
    let { open, onClose } = param;
    _s();
    const [shareLink, setShareLink] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isGenerating, setIsGenerating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ShareProfileModal.useEffect": ()=>{
            if (open) {
                generateShareLink();
            }
        }
    }["ShareProfileModal.useEffect"], [
        open
    ]);
    const generateShareLink = async ()=>{
        setIsGenerating(true);
        setError(null);
        try {
            const data = await __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$src$2f$services$2f$learner$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LearnerService"].createShareLink(30);
            // Backend now returns user_id and share_token directly
            const userId = data.user_id;
            const shareToken = data.share_token;
            if (userId && shareToken) {
                const fullLink = "".concat(window.location.origin, "/shared/").concat(userId, "/").concat(shareToken);
                setShareLink(fullLink);
            } else {
                throw new Error('Invalid response from server');
            }
        } catch (err) {
            console.error('Error generating share link:', err);
            setError('Failed to generate share link. Please try again.');
        } finally{
            setIsGenerating(false);
        }
    };
    const handleCopyLink = async ()=>{
        try {
            await navigator.clipboard.writeText(shareLink);
            setCopied(true);
            setTimeout(()=>setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy link:', err);
        }
    };
    const handleSocialShare = (platform)=>{
        const text = "Check out my professional credentials and portfolio on Credify!";
        const encodedText = encodeURIComponent(text);
        const encodedUrl = encodeURIComponent(shareLink);
        let shareUrl = '';
        switch(platform){
            case 'twitter':
                shareUrl = "https://twitter.com/intent/tweet?text=".concat(encodedText, "&url=").concat(encodedUrl);
                break;
            case 'facebook':
                shareUrl = "https://www.facebook.com/sharer/sharer.php?u=".concat(encodedUrl);
                break;
            case 'linkedin':
                shareUrl = "https://www.linkedin.com/sharing/share-offsite/?url=".concat(encodedUrl);
                break;
            case 'whatsapp':
                shareUrl = "https://wa.me/?text=".concat(encodedText, "%20").concat(encodedUrl);
                break;
            case 'email':
                shareUrl = "mailto:?subject=My Professional Portfolio&body=".concat(encodedText, "%0A%0A").concat(encodedUrl);
                break;
        }
        if (shareUrl) {
            window.open(shareUrl, '_blank', 'width=600,height=400');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__["Dialog"], {
        open: open,
        onClose: onClose,
        maxWidth: "sm",
        fullWidth: true,
        PaperProps: {
            sx: {
                borderRadius: 3,
                boxShadow: 6
            }
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogTitle$2f$DialogTitle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogTitle$3e$__["DialogTitle"], {
                sx: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    pb: 1
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
                                size: 24,
                                color: "#1976d2"
                            }, void 0, false, {
                                fileName: "[project]/CredApp/src/components/modals/ShareProfileModal.tsx",
                                lineNumber: 134,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                variant: "h6",
                                sx: {
                                    fontWeight: 600
                                },
                                children: "Share Profile"
                            }, void 0, false, {
                                fileName: "[project]/CredApp/src/components/modals/ShareProfileModal.tsx",
                                lineNumber: 135,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/CredApp/src/components/modals/ShareProfileModal.tsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                        onClick: onClose,
                        size: "small",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            size: 20
                        }, void 0, false, {
                            fileName: "[project]/CredApp/src/components/modals/ShareProfileModal.tsx",
                            lineNumber: 140,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/CredApp/src/components/modals/ShareProfileModal.tsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/CredApp/src/components/modals/ShareProfileModal.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogContent$2f$DialogContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__["DialogContent"], {
                sx: {
                    pt: 2
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                        variant: "body2",
                        color: "text.secondary",
                        sx: {
                            mb: 3
                        },
                        children: "This is a message that displays to provide the user with reminders, communication from other people, or other timely information, or other a timely information"
                    }, void 0, false, {
                        fileName: "[project]/CredApp/src/components/modals/ShareProfileModal.tsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Alert$2f$Alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Alert$3e$__["Alert"], {
                        severity: "error",
                        sx: {
                            mb: 3
                        },
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/CredApp/src/components/modals/ShareProfileModal.tsx",
                        lineNumber: 152,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: {
                            mb: 4
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                variant: "subtitle2",
                                sx: {
                                    mb: 2,
                                    fontWeight: 600
                                },
                                children: "Share Link"
                            }, void 0, false, {
                                fileName: "[project]/CredApp/src/components/modals/ShareProfileModal.tsx",
                                lineNumber: 159,
                                columnNumber: 11
                            }, this),
                            isGenerating ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                sx: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 2,
                                    p: 2,
                                    border: '1px solid',
                                    borderColor: 'divider',
                                    borderRadius: 2,
                                    bgcolor: 'grey.50'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__["CircularProgress"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/CredApp/src/components/modals/ShareProfileModal.tsx",
                                        lineNumber: 174,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                        variant: "body2",
                                        color: "text.secondary",
                                        children: "Generating share link..."
                                    }, void 0, false, {
                                        fileName: "[project]/CredApp/src/components/modals/ShareProfileModal.tsx",
                                        lineNumber: 175,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/CredApp/src/components/modals/ShareProfileModal.tsx",
                                lineNumber: 164,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                sx: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1,
                                    p: 1,
                                    border: '1px solid',
                                    borderColor: 'divider',
                                    borderRadius: 2,
                                    bgcolor: 'grey.50'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
                                        value: shareLink,
                                        variant: "standard",
                                        fullWidth: true,
                                        InputProps: {
                                            disableUnderline: true,
                                            readOnly: true,
                                            sx: {
                                                fontSize: '0.875rem',
                                                '& input': {
                                                    cursor: 'text',
                                                    color: 'text.primary'
                                                }
                                            }
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/CredApp/src/components/modals/ShareProfileModal.tsx",
                                        lineNumber: 190,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                        variant: "contained",
                                        onClick: handleCopyLink,
                                        startIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/CredApp/src/components/modals/ShareProfileModal.tsx",
                                            lineNumber: 209,
                                            columnNumber: 28
                                        }, void 0),
                                        sx: {
                                            minWidth: 'auto',
                                            px: 2,
                                            py: 1,
                                            textTransform: 'none',
                                            fontWeight: 600
                                        },
                                        children: copied ? 'Copied!' : 'Copy Link'
                                    }, void 0, false, {
                                        fileName: "[project]/CredApp/src/components/modals/ShareProfileModal.tsx",
                                        lineNumber: 206,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/CredApp/src/components/modals/ShareProfileModal.tsx",
                                lineNumber: 180,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/CredApp/src/components/modals/ShareProfileModal.tsx",
                        lineNumber: 158,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Divider$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {
                        sx: {
                            my: 3
                        }
                    }, void 0, false, {
                        fileName: "[project]/CredApp/src/components/modals/ShareProfileModal.tsx",
                        lineNumber: 224,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                variant: "subtitle2",
                                sx: {
                                    mb: 2,
                                    fontWeight: 600
                                },
                                children: "Share on Social Media"
                            }, void 0, false, {
                                fileName: "[project]/CredApp/src/components/modals/ShareProfileModal.tsx",
                                lineNumber: 228,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__["Stack"], {
                                direction: "row",
                                spacing: 2,
                                justifyContent: "center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                        onClick: ()=>handleSocialShare('twitter'),
                                        sx: {
                                            bgcolor: '#1DA1F2',
                                            color: 'white',
                                            '&:hover': {
                                                bgcolor: '#1a91da'
                                            },
                                            width: 48,
                                            height: 48
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__["Twitter"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/CredApp/src/components/modals/ShareProfileModal.tsx",
                                            lineNumber: 243,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/CredApp/src/components/modals/ShareProfileModal.tsx",
                                        lineNumber: 233,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                        onClick: ()=>handleSocialShare('facebook'),
                                        sx: {
                                            bgcolor: '#4267B2',
                                            color: 'white',
                                            '&:hover': {
                                                bgcolor: '#365899'
                                            },
                                            width: 48,
                                            height: 48
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__["Facebook"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/CredApp/src/components/modals/ShareProfileModal.tsx",
                                            lineNumber: 256,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/CredApp/src/components/modals/ShareProfileModal.tsx",
                                        lineNumber: 246,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                        onClick: ()=>handleSocialShare('linkedin'),
                                        sx: {
                                            bgcolor: '#0077B5',
                                            color: 'white',
                                            '&:hover': {
                                                bgcolor: '#006396'
                                            },
                                            width: 48,
                                            height: 48
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/CredApp/src/components/modals/ShareProfileModal.tsx",
                                            lineNumber: 269,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/CredApp/src/components/modals/ShareProfileModal.tsx",
                                        lineNumber: 259,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                        onClick: ()=>handleSocialShare('whatsapp'),
                                        sx: {
                                            bgcolor: '#25D366',
                                            color: 'white',
                                            '&:hover': {
                                                bgcolor: '#20b954'
                                            },
                                            width: 48,
                                            height: 48
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/CredApp/src/components/modals/ShareProfileModal.tsx",
                                            lineNumber: 282,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/CredApp/src/components/modals/ShareProfileModal.tsx",
                                        lineNumber: 272,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                        onClick: ()=>handleSocialShare('email'),
                                        sx: {
                                            bgcolor: '#EA4335',
                                            color: 'white',
                                            '&:hover': {
                                                bgcolor: '#d33b2c'
                                            },
                                            width: 48,
                                            height: 48
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/CredApp/src/components/modals/ShareProfileModal.tsx",
                                            lineNumber: 295,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/CredApp/src/components/modals/ShareProfileModal.tsx",
                                        lineNumber: 285,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/CredApp/src/components/modals/ShareProfileModal.tsx",
                                lineNumber: 232,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/CredApp/src/components/modals/ShareProfileModal.tsx",
                        lineNumber: 227,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/CredApp/src/components/modals/ShareProfileModal.tsx",
                lineNumber: 144,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogActions$2f$DialogActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogActions$3e$__["DialogActions"], {
                sx: {
                    p: 3,
                    pt: 2
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                    onClick: onClose,
                    variant: "outlined",
                    sx: {
                        textTransform: 'none',
                        fontWeight: 600,
                        borderRadius: 2
                    },
                    children: "Close"
                }, void 0, false, {
                    fileName: "[project]/CredApp/src/components/modals/ShareProfileModal.tsx",
                    lineNumber: 302,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/CredApp/src/components/modals/ShareProfileModal.tsx",
                lineNumber: 301,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/CredApp/src/components/modals/ShareProfileModal.tsx",
        lineNumber: 115,
        columnNumber: 5
    }, this);
}
_s(ShareProfileModal, "Dh4NheP5s/yq00UzA86ZMILqeSE=");
_c = ShareProfileModal;
var _c;
__turbopack_context__.k.register(_c, "ShareProfileModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/CredApp/src/hooks/useTranslations.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTranslations",
    ()=>useTranslations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CredApp/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useTranslations(namespace) {
    _s();
    const { messages } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    return (key)=>{
        if (!messages) return key;
        const keys = namespace ? "".concat(namespace, ".").concat(key) : key;
        const keyPath = keys.split('.');
        let value = messages;
        for (const k of keyPath){
            value = value === null || value === void 0 ? void 0 : value[k];
            if (value === undefined) break;
        }
        return value || key;
    };
}
_s(useTranslations, "uHtLSmamOGE+MTRTbGYmBavfa2E=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/CredApp/src/components/layout/DashboardSidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CredApp/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CredApp/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/lucide-react/dist/esm/icons/share-2.js [app-client] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PieChart$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/lucide-react/dist/esm/icons/chart-pie.js [app-client] (ecmascript) <export default as PieChart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Badge$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/lucide-react/dist/esm/icons/badge.js [app-client] (ecmascript) <export default as Badge>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$key$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Key$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/lucide-react/dist/esm/icons/key.js [app-client] (ecmascript) <export default as Key>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/lucide-react/dist/esm/icons/folder.js [app-client] (ecmascript) <export default as Folder>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/lucide-react/dist/esm/icons/circle-question-mark.js [app-client] (ecmascript) <export default as HelpCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CredApp/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$src$2f$components$2f$modals$2f$ShareProfileModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CredApp/src/components/modals/ShareProfileModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$src$2f$services$2f$learner$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CredApp/src/services/learner.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$src$2f$hooks$2f$useTranslations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CredApp/src/hooks/useTranslations.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function DashboardSidebar(param) {
    let { sidebarExpanded, setSidebarExpanded, userRole, onMobileClose } = param;
    _s();
    const [openDashboards, setOpenDashboards] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [openPages, setOpenPages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [openCredentials, setOpenCredentials] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [shareModalOpen, setShareModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$src$2f$hooks$2f$useTranslations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])('dashboard');
    const handleNavigation = (path)=>{
        router.push(path);
        // Close mobile sidebar if it's open
        if (onMobileClose) {
            onMobileClose();
        }
    };
    const handleDownloadPortfolio = async ()=>{
        try {
            const blob = await __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$src$2f$services$2f$learner$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LearnerService"].downloadPortfolio();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'portfolio.pdf';
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
        } catch (error) {
            console.error('Error downloading portfolio:', error);
        // You could add a toast notification here
        }
    };
    const handleShareProfile = ()=>{
        setShareModalOpen(true);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "".concat(sidebarExpanded ? 'w-64' : 'w-20', " bg-white border-r border-gray-200 transition-all duration-300 flex flex-col h-full"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 border-b border-gray-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-4",
                        children: [
                            sidebarExpanded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "100",
                                height: "50",
                                viewBox: "0 0 388 106",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        fillRule: "evenodd",
                                        clipRule: "evenodd",
                                        d: "M87.3006 25.5C87.3671 25.2868 87.4336 25.0743 87.5 24.8623C88.6384 20.8014 88.3406 18.7631 85 15.8623L66 1.8623C61.0271 -1.00737 58.8635 -0.600929 56 3.3623L43.5 24.8623H6C2.68629 24.8623 0 27.5486 0 30.8623V99.8623C0 103.176 2.68629 105.862 6 105.862H57C61.4057 99.4154 56.1561 95.8321 45.3873 88.4814C39.7427 84.6284 32.5817 79.7403 24.5 72.8623C24.5 72.8623 23.8567 72.2839 23.5 71.8623C20.7252 68.5829 21.0542 65.2012 23.5 60.8623L43.1457 25.5H87.3006ZM58.9336 105.862H58.5C58.6427 105.883 58.7872 105.882 58.9336 105.862Z",
                                        fill: "#0279F2"
                                    }, void 0, false, {
                                        fileName: "[project]/CredApp/src/components/layout/DashboardSidebar.tsx",
                                        lineNumber: 86,
                                        columnNumber: 14
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M87.5 24.8623C87.4336 25.0743 87.3671 25.2868 87.3006 25.5C84.6983 33.8392 82.0368 43.0725 79.3996 52.2216C71.6681 79.0444 64.1453 105.143 58.9336 105.862H102C105.314 105.862 108 103.176 108 99.8623V30.8623C108 27.5486 105.314 24.8623 102 24.8623H87.5Z",
                                        fill: "#014B99"
                                    }, void 0, false, {
                                        fileName: "[project]/CredApp/src/components/layout/DashboardSidebar.tsx",
                                        lineNumber: 87,
                                        columnNumber: 14
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M165.29 58.2866H150.326C149.638 53.2986 147.058 51.7506 143.962 51.7506C138.974 51.7506 136.308 56.2226 136.308 64.5646C136.308 72.8206 139.06 77.2926 144.392 77.2926C147.574 77.2926 149.81 75.4006 150.67 71.7026H165.548C163.57 83.3986 155.056 89.3326 144.048 89.3326C129.858 89.3326 121 79.7866 121 64.5646C121 48.7406 130.116 39.7106 143.962 39.7106C154.884 39.7106 163.656 45.8166 165.29 58.2866Z",
                                        fill: "#014B99"
                                    }, void 0, false, {
                                        fileName: "[project]/CredApp/src/components/layout/DashboardSidebar.tsx",
                                        lineNumber: 88,
                                        columnNumber: 14
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M167.911 87.7846V41.2586H182.789V47.6226C185.627 42.1186 190.013 39.7106 194.485 39.7106C196.463 39.7106 198.269 40.2266 199.129 41.2586V53.8146C197.495 53.4706 195.947 53.2986 193.797 53.2986C186.315 53.2986 182.789 57.4266 182.789 64.3926V87.7846H167.911Z",
                                        fill: "#014B99"
                                    }, void 0, false, {
                                        fileName: "[project]/CredApp/src/components/layout/DashboardSidebar.tsx",
                                        lineNumber: 89,
                                        columnNumber: 14
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M244.638 72.4766C242.23 83.1406 233.372 89.3326 221.59 89.3326C206.97 89.3326 197.768 79.8726 197.768 64.5646C197.768 48.7406 207.056 39.7106 221.074 39.7106C235.35 39.7106 244.294 49.0846 244.294 64.3926V67.6606H213.162C213.85 74.1106 216.774 77.5506 221.59 77.5506C225.374 77.5506 227.696 76.0026 228.986 72.4766H244.638ZM221.074 51.4926C216.946 51.4926 214.366 54.2446 213.42 59.4906H228.814C227.868 54.2446 225.202 51.4926 221.074 51.4926Z",
                                        fill: "#014B99"
                                    }, void 0, false, {
                                        fileName: "[project]/CredApp/src/components/layout/DashboardSidebar.tsx",
                                        lineNumber: 90,
                                        columnNumber: 14
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M264.575 89.3326C252.707 89.3326 245.139 79.8726 245.139 64.5646C245.139 48.7406 252.879 39.7106 264.575 39.7106C269.305 39.7106 273.089 41.6886 275.841 45.5586V25.8646H290.719V87.7846H275.841V83.2266C273.089 87.1826 269.219 89.3326 264.575 89.3326ZM268.101 77.2926C273.175 77.2926 275.841 72.8206 275.841 64.5646C275.841 56.2226 273.175 51.7506 268.101 51.7506C263.113 51.7506 260.447 56.2226 260.447 64.5646C260.447 72.8206 263.113 77.2926 268.101 77.2926Z",
                                        fill: "#014B99"
                                    }, void 0, false, {
                                        fileName: "[project]/CredApp/src/components/layout/DashboardSidebar.tsx",
                                        lineNumber: 91,
                                        columnNumber: 14
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M310.951 52.6106V41.2586H316.369C316.455 30.1646 321.873 24.3166 330.989 24.3166C334.859 24.3166 337.611 25.0906 338.987 25.7786V34.9806H337.955C332.451 34.9806 331.247 37.3886 331.247 41.2586H338.987V52.6106H331.247V87.7846H316.369V52.6106H310.951Z",
                                        fill: "#014B99"
                                    }, void 0, false, {
                                        fileName: "[project]/CredApp/src/components/layout/DashboardSidebar.tsx",
                                        lineNumber: 92,
                                        columnNumber: 14
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M352 63C352 63 348.681 55 341.181 41.2583H350.234C353.363 41.3138 355 41 357.5 46.5L358.5 48.5C366.201 28.6023 372.39 22.1827 386 23L387.5 23.5C361 62 366 89.5 341 88L351.5 67C352.337 65.1285 352.957 64.6244 352 63Z",
                                        fill: "#014B99"
                                    }, void 0, false, {
                                        fileName: "[project]/CredApp/src/components/layout/DashboardSidebar.tsx",
                                        lineNumber: 93,
                                        columnNumber: 14
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M293.622 87.7843V41.2583H308.5V87.7843H293.622Z",
                                        fill: "#014B99"
                                    }, void 0, false, {
                                        fileName: "[project]/CredApp/src/components/layout/DashboardSidebar.tsx",
                                        lineNumber: 94,
                                        columnNumber: 14
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "301",
                                        cy: "28",
                                        r: "8",
                                        fill: "#0279F2"
                                    }, void 0, false, {
                                        fileName: "[project]/CredApp/src/components/layout/DashboardSidebar.tsx",
                                        lineNumber: 95,
                                        columnNumber: 14
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/CredApp/src/components/layout/DashboardSidebar.tsx",
                                lineNumber: 85,
                                columnNumber: 14
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-8 h-8 bg-blue-800 rounded-lg flex items-center justify-center mx-auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-white font-bold text-sm",
                                    children: "C"
                                }, void 0, false, {
                                    fileName: "[project]/CredApp/src/components/layout/DashboardSidebar.tsx",
                                    lineNumber: 99,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/CredApp/src/components/layout/DashboardSidebar.tsx",
                                lineNumber: 98,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSidebarExpanded(!sidebarExpanded),
                                className: "p-1 rounded-md hover:bg-gray-100 transition-colors",
                                children: sidebarExpanded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                    size: 16,
                                    className: "text-gray-600"
                                }, void 0, false, {
                                    fileName: "[project]/CredApp/src/components/layout/DashboardSidebar.tsx",
                                    lineNumber: 107,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                    size: 16,
                                    className: "text-gray-600"
                                }, void 0, false, {
                                    fileName: "[project]/CredApp/src/components/layout/DashboardSidebar.tsx",
                                    lineNumber: 109,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/CredApp/src/components/layout/DashboardSidebar.tsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/CredApp/src/components/layout/DashboardSidebar.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    sidebarExpanded && userRole == 'learner' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleDownloadPortfolio,
                                className: "w-full text-left text-sm text-gray-600 hover:text-gray-900 py-2 flex items-center gap-2 hover:bg-gray-50 rounded-md px-2 transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/CredApp/src/components/layout/DashboardSidebar.tsx",
                                        lineNumber: 120,
                                        columnNumber: 15
                                    }, this),
                                    t('downloadPortfolio')
                                ]
                            }, void 0, true, {
                                fileName: "[project]/CredApp/src/components/layout/DashboardSidebar.tsx",
                                lineNumber: 116,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleShareProfile,
                                className: "w-full text-left text-sm text-gray-600 hover:text-gray-900 py-2 flex items-center gap-2 hover:bg-gray-50 rounded-md px-2 transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/CredApp/src/components/layout/DashboardSidebar.tsx",
                                        lineNumber: 127,
                                        columnNumber: 15
                                    }, this),
                                    t('shareProfile')
                                ]
                            }, void 0, true, {
                                fileName: "[project]/CredApp/src/components/layout/DashboardSidebar.tsx",
                                lineNumber: 123,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true)
                ]
            }, void 0, true, {
                fileName: "[project]/CredApp/src/components/layout/DashboardSidebar.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto py-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-2",
                                    children: sidebarExpanded ? 'DASHBOARDS' : ''
                                }, void 0, false, {
                                    fileName: "[project]/CredApp/src/components/layout/DashboardSidebar.tsx",
                                    lineNumber: 139,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleNavigation("/dashboard/".concat(userRole)),
                                    className: "w-full flex items-center gap-2 px-2 py-2 text-sm rounded-md transition-colors ".concat(pathname === "/dashboard/".concat(userRole) ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-700 hover:bg-gray-50'),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PieChart$3e$__["PieChart"], {
                                            size: 16,
                                            className: pathname === "/dashboard/".concat(userRole) ? 'text-blue-600' : 'text-gray-600'
                                        }, void 0, false, {
                                            fileName: "[project]/CredApp/src/components/layout/DashboardSidebar.tsx",
                                            lineNumber: 151,
                                            columnNumber: 15
                                        }, this),
                                        sidebarExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: t('overview')
                                        }, void 0, false, {
                                            fileName: "[project]/CredApp/src/components/layout/DashboardSidebar.tsx",
                                            lineNumber: 152,
                                            columnNumber: 35
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/CredApp/src/components/layout/DashboardSidebar.tsx",
                                    lineNumber: 143,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/CredApp/src/components/layout/DashboardSidebar.tsx",
                            lineNumber: 138,
                            columnNumber: 11
                        }, this),
                        userRole === 'institution' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-2",
                                    children: sidebarExpanded ? 'CREDENTIALS' : ''
                                }, void 0, false, {
                                    fileName: "[project]/CredApp/src/components/layout/DashboardSidebar.tsx",
                                    lineNumber: 160,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setOpenCredentials(!openCredentials),
                                    className: "w-full flex items-center gap-2 px-2 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors",
                                    children: [
                                        openCredentials ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/CredApp/src/components/layout/DashboardSidebar.tsx",
                                            lineNumber: 168,
                                            columnNumber: 36
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/CredApp/src/components/layout/DashboardSidebar.tsx",
                                            lineNumber: 168,
                                            columnNumber: 64
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Badge$3e$__["Badge"], {
                                            size: 16,
                                            className: "text-gray-600"
                                        }, void 0, false, {
                                            fileName: "[project]/CredApp/src/components/layout/DashboardSidebar.tsx",
                                            lineNumber: 169,
                                            columnNumber: 17
                                        }, this),
                                        sidebarExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium",
                                            children: "Credentials"
                                        }, void 0, false, {
                                            fileName: "[project]/CredApp/src/components/layout/DashboardSidebar.tsx",
                                            lineNumber: 170,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/CredApp/src/components/layout/DashboardSidebar.tsx",
                                    lineNumber: 164,
                                    columnNumber: 15
                                }, this),
                                openCredentials && sidebarExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleNavigation('/dashboard/institution/credentials'),
                                            className: "w-full flex items-center gap-2 px-6 py-2 text-sm rounded-md transition-colors ".concat(pathname === '/dashboard/institution/credentials' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50'),
                                            children: "Issue Single Credential"
                                        }, void 0, false, {
                                            fileName: "[project]/CredApp/src/components/layout/DashboardSidebar.tsx",
                                            lineNumber: 175,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleNavigation('/dashboard/institution/bulk-credentials'),
                                            className: "w-full flex items-center gap-2 px-6 py-2 text-sm rounded-md transition-colors ".concat(pathname === '/dashboard/institution/bulk-credentials' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50'),
                                            children: "Issue Bulk Credentials"
                                        }, void 0, false, {
                                            fileName: "[project]/CredApp/src/components/layout/DashboardSidebar.tsx",
                                            lineNumber: 185,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/CredApp/src/components/layout/DashboardSidebar.tsx",
                                    lineNumber: 174,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/CredApp/src/components/layout/DashboardSidebar.tsx",
                            lineNumber: 159,
                            columnNumber: 13
                        }, this),
                        userRole === 'institution' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-2",
                                    children: sidebarExpanded ? 'API KEYS' : ''
                                }, void 0, false, {
                                    fileName: "[project]/CredApp/src/components/layout/DashboardSidebar.tsx",
                                    lineNumber: 203,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleNavigation('/dashboard/institution/api-keys'),
                                    className: "w-full flex items-center gap-2 px-2 py-2 text-sm rounded-md transition-colors ".concat(pathname === '/dashboard/institution/api-keys' ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-700 hover:bg-gray-50'),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$key$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Key$3e$__["Key"], {
                                            size: 16,
                                            className: pathname === '/dashboard/institution/api-keys' ? 'text-blue-600' : 'text-gray-600'
                                        }, void 0, false, {
                                            fileName: "[project]/CredApp/src/components/layout/DashboardSidebar.tsx",
                                            lineNumber: 215,
                                            columnNumber: 17
                                        }, this),
                                        sidebarExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "API Keys"
                                        }, void 0, false, {
                                            fileName: "[project]/CredApp/src/components/layout/DashboardSidebar.tsx",
                                            lineNumber: 216,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/CredApp/src/components/layout/DashboardSidebar.tsx",
                                    lineNumber: 207,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/CredApp/src/components/layout/DashboardSidebar.tsx",
                            lineNumber: 202,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-8"
                        }, void 0, false, {
                            fileName: "[project]/CredApp/src/components/layout/DashboardSidebar.tsx",
                            lineNumber: 221,
                            columnNumber: 11
                        }, this),
                        sidebarExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-500 mb-4 ml-2 font-medium",
                            children: "PAGES"
                        }, void 0, false, {
                            fileName: "[project]/CredApp/src/components/layout/DashboardSidebar.tsx",
                            lineNumber: 222,
                            columnNumber: 31
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setOpenPages(!openPages),
                            className: "w-full flex items-center gap-2 px-2 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors",
                            children: [
                                openPages ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/CredApp/src/components/layout/DashboardSidebar.tsx",
                                    lineNumber: 229,
                                    columnNumber: 26
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/CredApp/src/components/layout/DashboardSidebar.tsx",
                                    lineNumber: 229,
                                    columnNumber: 54
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"], {
                                    size: 16,
                                    className: "text-gray-600"
                                }, void 0, false, {
                                    fileName: "[project]/CredApp/src/components/layout/DashboardSidebar.tsx",
                                    lineNumber: 230,
                                    columnNumber: 13
                                }, this),
                                sidebarExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-medium",
                                    children: t('userProfile')
                                }, void 0, false, {
                                    fileName: "[project]/CredApp/src/components/layout/DashboardSidebar.tsx",
                                    lineNumber: 231,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/CredApp/src/components/layout/DashboardSidebar.tsx",
                            lineNumber: 225,
                            columnNumber: 11
                        }, this),
                        openPages && sidebarExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2 space-y-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleNavigation('/dashboard/profile'),
                                    className: "w-full flex items-center gap-2 px-6 py-2 text-sm rounded-md transition-colors ".concat(pathname === '/dashboard/profile' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50'),
                                    children: "Overview"
                                }, void 0, false, {
                                    fileName: "[project]/CredApp/src/components/layout/DashboardSidebar.tsx",
                                    lineNumber: 236,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleNavigation('/dashboard/profile/credentials'),
                                    className: "w-full flex items-center gap-2 px-6 py-2 text-sm rounded-md transition-colors ".concat(pathname === '/dashboard/profile/credentials' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50'),
                                    children: "Credentials"
                                }, void 0, false, {
                                    fileName: "[project]/CredApp/src/components/layout/DashboardSidebar.tsx",
                                    lineNumber: 246,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleNavigation('/dashboard/profile/pathways'),
                                    className: "w-full flex items-center gap-2 px-6 py-2 text-sm rounded-md transition-colors ".concat(pathname === '/dashboard/profile/pathways' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50'),
                                    children: "Pathways"
                                }, void 0, false, {
                                    fileName: "[project]/CredApp/src/components/layout/DashboardSidebar.tsx",
                                    lineNumber: 256,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/CredApp/src/components/layout/DashboardSidebar.tsx",
                            lineNumber: 235,
                            columnNumber: 13
                        }, this),
                        userRole === 'learner' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6"
                                }, void 0, false, {
                                    fileName: "[project]/CredApp/src/components/layout/DashboardSidebar.tsx",
                                    lineNumber: 272,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleNavigation('/dashboard/learner/recommendations'),
                                    className: "w-full flex items-center gap-2 px-2 py-2 text-sm rounded-md transition-colors ".concat(pathname === '/dashboard/learner/recommendations' ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-700 hover:bg-gray-50'),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                            size: 16,
                                            className: pathname === '/dashboard/learner/recommendations' ? 'text-blue-600' : 'text-gray-600'
                                        }, void 0, false, {
                                            fileName: "[project]/CredApp/src/components/layout/DashboardSidebar.tsx",
                                            lineNumber: 281,
                                            columnNumber: 17
                                        }, this),
                                        sidebarExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Recommendations"
                                        }, void 0, false, {
                                            fileName: "[project]/CredApp/src/components/layout/DashboardSidebar.tsx",
                                            lineNumber: 282,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/CredApp/src/components/layout/DashboardSidebar.tsx",
                                    lineNumber: 273,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true),
                        userRole === 'employer' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6"
                                }, void 0, false, {
                                    fileName: "[project]/CredApp/src/components/layout/DashboardSidebar.tsx",
                                    lineNumber: 289,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleNavigation('/dashboard/employer'),
                                    className: "w-full flex items-center gap-2 px-2 py-2 text-sm rounded-md transition-colors ".concat(pathname === '/dashboard/employer' ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-700 hover:bg-gray-50'),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PieChart$3e$__["PieChart"], {
                                            size: 16,
                                            className: pathname === '/dashboard/employer' ? 'text-blue-600' : 'text-gray-600'
                                        }, void 0, false, {
                                            fileName: "[project]/CredApp/src/components/layout/DashboardSidebar.tsx",
                                            lineNumber: 298,
                                            columnNumber: 17
                                        }, this),
                                        sidebarExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Overview"
                                        }, void 0, false, {
                                            fileName: "[project]/CredApp/src/components/layout/DashboardSidebar.tsx",
                                            lineNumber: 299,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/CredApp/src/components/layout/DashboardSidebar.tsx",
                                    lineNumber: 290,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleNavigation('/dashboard/employer/verify-credentials'),
                                    className: "w-full flex items-center gap-2 px-2 py-2 text-sm rounded-md transition-colors ".concat(pathname === '/dashboard/employer/verify-credentials' ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-700 hover:bg-gray-50'),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Badge$3e$__["Badge"], {
                                            size: 16,
                                            className: pathname === '/dashboard/employer/verify-credentials' ? 'text-blue-600' : 'text-gray-600'
                                        }, void 0, false, {
                                            fileName: "[project]/CredApp/src/components/layout/DashboardSidebar.tsx",
                                            lineNumber: 310,
                                            columnNumber: 17
                                        }, this),
                                        sidebarExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Verify Credentials"
                                        }, void 0, false, {
                                            fileName: "[project]/CredApp/src/components/layout/DashboardSidebar.tsx",
                                            lineNumber: 311,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/CredApp/src/components/layout/DashboardSidebar.tsx",
                                    lineNumber: 302,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleNavigation('/dashboard/employer/verified-credentials'),
                                    className: "w-full flex items-center gap-2 px-2 py-2 text-sm rounded-md transition-colors ".concat(pathname === '/dashboard/employer/verified-credentials' ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-700 hover:bg-gray-50'),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                            size: 16,
                                            className: pathname === '/dashboard/employer/verified-credentials' ? 'text-blue-600' : 'text-gray-600'
                                        }, void 0, false, {
                                            fileName: "[project]/CredApp/src/components/layout/DashboardSidebar.tsx",
                                            lineNumber: 322,
                                            columnNumber: 17
                                        }, this),
                                        sidebarExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Verified Credentials"
                                        }, void 0, false, {
                                            fileName: "[project]/CredApp/src/components/layout/DashboardSidebar.tsx",
                                            lineNumber: 323,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/CredApp/src/components/layout/DashboardSidebar.tsx",
                                    lineNumber: 314,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleNavigation('/dashboard/employer/candidate-directory'),
                                    className: "w-full flex items-center gap-2 px-2 py-2 text-sm rounded-md transition-colors ".concat(pathname === '/dashboard/employer/candidate-directory' ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-700 hover:bg-gray-50'),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                            size: 16,
                                            className: pathname === '/dashboard/employer/candidate-directory' ? 'text-blue-600' : 'text-gray-600'
                                        }, void 0, false, {
                                            fileName: "[project]/CredApp/src/components/layout/DashboardSidebar.tsx",
                                            lineNumber: 334,
                                            columnNumber: 17
                                        }, this),
                                        sidebarExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Candidate Directory"
                                        }, void 0, false, {
                                            fileName: "[project]/CredApp/src/components/layout/DashboardSidebar.tsx",
                                            lineNumber: 335,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/CredApp/src/components/layout/DashboardSidebar.tsx",
                                    lineNumber: 326,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleNavigation('/dashboard/employer/search-learners'),
                                    className: "w-full flex items-center gap-2 px-2 py-2 text-sm rounded-md transition-colors ".concat(pathname === '/dashboard/employer/search-learners' ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-700 hover:bg-gray-50'),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                            size: 16,
                                            className: pathname === '/dashboard/employer/search-learners' ? 'text-blue-600' : 'text-gray-600'
                                        }, void 0, false, {
                                            fileName: "[project]/CredApp/src/components/layout/DashboardSidebar.tsx",
                                            lineNumber: 346,
                                            columnNumber: 17
                                        }, this),
                                        sidebarExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Search Learners"
                                        }, void 0, false, {
                                            fileName: "[project]/CredApp/src/components/layout/DashboardSidebar.tsx",
                                            lineNumber: 347,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/CredApp/src/components/layout/DashboardSidebar.tsx",
                                    lineNumber: 338,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true)
                    ]
                }, void 0, true, {
                    fileName: "[project]/CredApp/src/components/layout/DashboardSidebar.tsx",
                    lineNumber: 136,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/CredApp/src/components/layout/DashboardSidebar.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-gray-200 p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>handleNavigation('/dashboard/help'),
                    className: "w-full flex items-center gap-2 px-2 py-2 text-sm rounded-md transition-colors ".concat(pathname === '/dashboard/help' ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-700 hover:bg-gray-50'),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__["HelpCircle"], {
                            size: 16,
                            className: pathname === '/dashboard/help' ? 'text-blue-600' : 'text-gray-600'
                        }, void 0, false, {
                            fileName: "[project]/CredApp/src/components/layout/DashboardSidebar.tsx",
                            lineNumber: 365,
                            columnNumber: 11
                        }, this),
                        sidebarExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Help & Support"
                        }, void 0, false, {
                            fileName: "[project]/CredApp/src/components/layout/DashboardSidebar.tsx",
                            lineNumber: 366,
                            columnNumber: 31
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/CredApp/src/components/layout/DashboardSidebar.tsx",
                    lineNumber: 357,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/CredApp/src/components/layout/DashboardSidebar.tsx",
                lineNumber: 356,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$src$2f$components$2f$modals$2f$ShareProfileModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: shareModalOpen,
                onClose: ()=>setShareModalOpen(false)
            }, void 0, false, {
                fileName: "[project]/CredApp/src/components/layout/DashboardSidebar.tsx",
                lineNumber: 371,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/CredApp/src/components/layout/DashboardSidebar.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
}
_s(DashboardSidebar, "nwo9CXrhQHMmKWP3xtxnDrlItlA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$src$2f$hooks$2f$useTranslations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"]
    ];
});
_c = DashboardSidebar;
var _c;
__turbopack_context__.k.register(_c, "DashboardSidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/CredApp/src/components/LanguageSelector.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LanguageSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CredApp/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CredApp/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/material/esm/Button/Button.js [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Menu$2f$Menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/material/esm/Menu/Menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/material/esm/MenuItem/MenuItem.js [app-client] (ecmascript) <export default as MenuItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemIcon$2f$ListItemIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemIcon$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/material/esm/ListItemIcon/ListItemIcon.js [app-client] (ecmascript) <export default as ListItemIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemText$2f$ListItemText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemText$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/material/esm/ListItemText/ListItemText.js [app-client] (ecmascript) <export default as ListItemText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CredApp/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const languages = [
    {
        code: 'en',
        name: 'English',
        flag: '🇺🇸'
    },
    {
        code: 'es',
        name: 'Español',
        flag: '🇪🇸'
    },
    {
        code: 'fr',
        name: 'Français',
        flag: '🇫🇷'
    },
    {
        code: 'de',
        name: 'Deutsch',
        flag: '🇩🇪'
    },
    {
        code: 'hi',
        name: 'हिन्दी',
        flag: '🇮🇳'
    }
];
function LanguageSelector() {
    _s();
    const [anchorEl, setAnchorEl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const { locale, setLocale } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const currentLanguage = languages.find((lang)=>lang.code === locale) || languages[0];
    const handleClick = (event)=>{
        setAnchorEl(event.currentTarget);
    };
    const handleClose = ()=>{
        setAnchorEl(null);
    };
    const handleLanguageChange = async (languageCode)=>{
        await setLocale(languageCode);
        handleClose();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                onClick: handleClick,
                startIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                    size: 16
                }, void 0, false, {
                    fileName: "[project]/CredApp/src/components/LanguageSelector.tsx",
                    lineNumber: 47,
                    columnNumber: 20
                }, void 0),
                endIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                    size: 16
                }, void 0, false, {
                    fileName: "[project]/CredApp/src/components/LanguageSelector.tsx",
                    lineNumber: 48,
                    columnNumber: 18
                }, void 0),
                sx: {
                    color: 'text.secondary',
                    textTransform: 'none',
                    minWidth: 'auto',
                    px: 1,
                    py: 0.5,
                    '&:hover': {
                        backgroundColor: 'action.hover'
                    }
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                    sx: {
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                fontSize: '16px'
                            },
                            children: currentLanguage.flag
                        }, void 0, false, {
                            fileName: "[project]/CredApp/src/components/LanguageSelector.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            variant: "body2",
                            sx: {
                                fontWeight: 500
                            },
                            children: currentLanguage.code.toUpperCase()
                        }, void 0, false, {
                            fileName: "[project]/CredApp/src/components/LanguageSelector.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/CredApp/src/components/LanguageSelector.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/CredApp/src/components/LanguageSelector.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Menu$2f$Menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                anchorEl: anchorEl,
                open: Boolean(anchorEl),
                onClose: handleClose,
                PaperProps: {
                    sx: {
                        mt: 1,
                        minWidth: 200,
                        boxShadow: 3,
                        borderRadius: 2
                    }
                },
                transformOrigin: {
                    horizontal: 'right',
                    vertical: 'top'
                },
                anchorOrigin: {
                    horizontal: 'right',
                    vertical: 'bottom'
                },
                children: languages.map((language)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                        onClick: ()=>handleLanguageChange(language.code),
                        selected: language.code === locale,
                        sx: {
                            py: 1.5,
                            px: 2,
                            '&.Mui-selected': {
                                backgroundColor: 'primary.light',
                                color: 'primary.main',
                                '&:hover': {
                                    backgroundColor: 'primary.light'
                                }
                            }
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemIcon$2f$ListItemIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemIcon$3e$__["ListItemIcon"], {
                                sx: {
                                    minWidth: 36
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: '20px'
                                    },
                                    children: language.flag
                                }, void 0, false, {
                                    fileName: "[project]/CredApp/src/components/LanguageSelector.tsx",
                                    lineNumber: 101,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/CredApp/src/components/LanguageSelector.tsx",
                                lineNumber: 100,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemText$2f$ListItemText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemText$3e$__["ListItemText"], {
                                primary: language.name,
                                primaryTypographyProps: {
                                    fontWeight: language.code === locale ? 600 : 400
                                }
                            }, void 0, false, {
                                fileName: "[project]/CredApp/src/components/LanguageSelector.tsx",
                                lineNumber: 103,
                                columnNumber: 13
                            }, this)
                        ]
                    }, language.code, true, {
                        fileName: "[project]/CredApp/src/components/LanguageSelector.tsx",
                        lineNumber: 84,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/CredApp/src/components/LanguageSelector.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(LanguageSelector, "AoLYonujJ3+GwI7W0UigYLZN3kI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = LanguageSelector;
var _c;
__turbopack_context__.k.register(_c, "LanguageSelector");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/CredApp/src/services/openrouter.service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// OpenRouter API Service for AI Chat
__turbopack_context__.s([
    "openRouterService",
    ()=>openRouterService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/CredApp/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
;
class OpenRouterService {
    async chat(request) {
        try {
            const response = await fetch(this.baseUrl, {
                method: 'POST',
                headers: {
                    'Authorization': "Bearer ".concat(this.apiKey),
                    'HTTP-Referer': this.siteUrl,
                    'X-Title': this.siteName,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(request)
            });
            if (!response.ok) {
                var _error_error;
                const error = await response.json();
                throw new Error(((_error_error = error.error) === null || _error_error === void 0 ? void 0 : _error_error.message) || 'OpenRouter API error');
            }
            return await response.json();
        } catch (error) {
            console.error('OpenRouter API error:', error);
            throw error;
        }
    }
    async sendMessage(message) {
        let conversationHistory = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], systemContext = arguments.length > 2 ? arguments[2] : void 0;
        var _response_choices__message, _response_choices_;
        const messages = [];
        // Add system context if provided
        if (systemContext) {
            messages.push({
                role: 'system',
                content: systemContext
            });
        }
        // Add conversation history
        messages.push(...conversationHistory);
        // Add user message
        messages.push({
            role: 'user',
            content: message
        });
        const response = await this.chat({
            model: 'openai/gpt-oss-20b:free',
            messages,
            temperature: 0.7,
            max_tokens: 1000
        });
        return ((_response_choices_ = response.choices[0]) === null || _response_choices_ === void 0 ? void 0 : (_response_choices__message = _response_choices_.message) === null || _response_choices__message === void 0 ? void 0 : _response_choices__message.content) || 'No response from AI';
    }
    constructor(){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "apiKey", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "baseUrl", 'https://openrouter.ai/api/v1/chat/completions');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "siteUrl", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "siteName", void 0);
        // You can set these via environment variables or config
        // Trim the API key to remove any whitespace or newlines
        this.apiKey = (__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_OPENROUTER_API_KEY || '').trim();
        this.siteUrl = __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
        this.siteName = __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_SITE_NAME || 'CredApp - Digital Credential Platform';
    }
}
const openRouterService = new OpenRouterService();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/CredApp/src/config/chatbot-context.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// System context for the AI chatbot with complete application knowledge
__turbopack_context__.s([
    "CHATBOT_SYSTEM_CONTEXT",
    ()=>CHATBOT_SYSTEM_CONTEXT
]);
const CHATBOT_SYSTEM_CONTEXT = 'You are an AI assistant for CredApp, a comprehensive Digital Credential Management Platform. You help users navigate the platform, understand features, and resolve issues.\n\n## PLATFORM OVERVIEW\nCredApp is a blockchain-based credential management system that enables secure issuance, verification, and management of digital credentials using Decentralized Identifiers (DIDs).\n\n## USER ROLES\n1. **Learner**: Students/individuals who receive and manage credentials\n2. **Institution**: Educational institutions/training centers that issue credentials\n3. **Employer**: Companies that verify credentials and search for candidates\n4. **Issuer**: Organizations that can issue various types of credentials\n5. **Admin**: Platform administrators with full system access\n\n## CORE FEATURES\n\n### For LEARNERS:\n- **Dashboard**: View all earned credentials, statistics, and recommendations\n- **Profile Management**: Update personal information, view learning pathways\n- **Credential Wallet**: Store and manage digital credentials securely\n- **Share Credentials**: Generate QR codes or shareable links\n- **Recommendations**: AI-powered course and career path recommendations\n- **Learning Pathways**: Track progress through educational programs\n- **KYC (Know Your Customer)**: Complete identity verification\n\n### For INSTITUTIONS:\n- **Issue Credentials**: Create and issue digital credentials to learners\n- **Bulk Credential Issuance**: Upload CSV files to issue multiple credentials\n- **Credential Templates**: Create and manage credential templates\n- **Student Management**: Track issued credentials and student records\n- **API Integration**: Access API keys for system integration\n- **Analytics**: View statistics on issued credentials\n- **NSQF Compliance**: Support for National Skills Qualifications Framework courses\n\n### For EMPLOYERS:\n- **Verify Credentials**: Scan QR codes or verify credentials via blockchain\n- **Search Learners**: Find candidates by skills, qualifications, location\n- **Candidate Directory**: Browse verified professionals\n- **Job Postings**: Post job opportunities and manage applications\n- **View Applications**: Review candidate applications with verified credentials\n- **Verified Credentials Database**: Access pool of verified talent\n\n### For ISSUERS:\n- **Credential Issuance**: Issue various types of credentials\n- **API Documentation**: Access comprehensive API documentation\n- **Workflow Management**: Manage credential issuance workflows\n- **Integration Tools**: Tools for integrating with existing systems\n\n### For ADMINS:\n- **User Management**: Manage all user accounts and roles\n- **System Configuration**: Configure platform settings\n- **Analytics & Reports**: View platform-wide analytics\n- **Security Management**: Manage security settings and permissions\n- **Audit Logs**: Track all system activities\n\n## TECHNICAL FEATURES\n\n### Backend Technologies:\n- **Framework**: FastAPI (Python)\n- **Database**: MongoDB with motor (async driver)\n- **Blockchain**: Ethereum-compatible blockchain for credential verification\n- **Authentication**: JWT tokens with role-based access control (RBAC)\n- **Security**: bcrypt password hashing, middleware protection\n- **File Storage**: Azure Blob Storage for documents\n- **APIs**: RESTful APIs with versioning (v1)\n- **Services**:\n  - DID Service: Manage Decentralized Identifiers\n  - Blockchain Service: Interact with blockchain for credential verification\n  - OCR Service: Extract text from documents\n  - PDF Service: Generate credential PDFs\n  - QR Service: Generate and verify QR codes\n  - Recommendation Service: AI-powered recommendations\n\n### Frontend Technologies:\n- **Framework**: Next.js 15.5 with React 19\n- **UI Library**: Material-UI (MUI) v7\n- **Styling**: Tailwind CSS 4\n- **Forms**: React Hook Form with Zod validation\n- **State Management**: React Context API\n- **Animations**: Framer Motion, Lottie\n- **Charts**: Chart.js, MUI X-Charts\n- **Internationalization**: next-intl for multi-language support\n- **Accessibility**: Custom accessibility context and widgets\n\n### Key Backend Endpoints:\n\n#### Authentication & Users:\n- POST /api/v1/auth/register - Register new user\n- POST /api/v1/auth/login - Login and get JWT token\n- POST /api/v1/auth/logout - Logout user\n- GET /api/v1/users/me - Get current user profile\n- PUT /api/v1/users/me - Update user profile\n- POST /api/v1/users/change-password - Change password\n- GET /api/v1/health - System health check\n\n#### Learner Endpoints (/api/v1/learner):\n- GET /profile - Get learner profile\n- PUT /profile - Update learner profile\n- GET /credentials - Get all learner credentials (with filters)\n- GET /credentials/{credential_id} - Get specific credential details\n- POST /credentials/tag - Tag credential with skills\n- DELETE /credentials/tag - Remove tags from credential\n- POST /credentials/share - Share credential (QR, link, email)\n- POST /credentials/revoke-share - Revoke shared access\n- GET /shared-credentials - Get list of shared credentials\n- GET /notifications - Get learner notifications\n- POST /notifications/{notification_id}/read - Mark notification as read\n- GET /analytics - Get learner analytics and insights\n- POST /search - Search for opportunities, courses\n- GET /recommendations - Get AI-powered recommendations\n\n#### Issuer/Institution Endpoints (/api/v1/issuer):\n- POST /credentials/submit - Submit single credential\n- POST /credentials/bulk-submit - Upload CSV for bulk credential issuance\n- POST /credentials/upload - Upload credential data\n- POST /credentials/verify - Verify credential data\n- POST /credentials/deploy - Deploy credential to blockchain\n- GET /credentials - Get issued credentials list\n- GET /credentials/{credential_id} - Get credential details\n- PUT /credentials/{credential_id} - Update credential\n- POST /credentials/{credential_id}/revoke - Revoke credential\n- POST /api-keys - Generate new API key\n- GET /api-keys - List API keys\n- DELETE /api-keys/{key_id} - Revoke API key\n- POST /webhooks - Configure webhook for events\n- GET /webhooks - List webhooks\n- PUT /webhooks/{webhook_id} - Update webhook\n- DELETE /webhooks/{webhook_id} - Delete webhook\n- GET /batch-status/{batch_id} - Check bulk issuance status\n\n#### Employer Endpoints (/api/v1/employer):\n- GET /candidates - Get all candidates with pagination\n- POST /search - Advanced candidate search by skills, location, credentials\n- GET /candidates/{learner_id} - Get candidate profile\n- GET /candidates/{learner_id}/credentials - Get candidate credentials\n- POST /verify-credential - Verify credential authenticity\n- POST /verify-qr - Verify credential via QR code\n- POST /export - Export candidate list (CSV, PDF, Excel)\n- GET /export/{job_id} - Get export job status\n- GET /notifications - Get employer notifications\n- POST /jobs - Post job opportunity\n- GET /jobs - List posted jobs\n- PUT /jobs/{job_id} - Update job posting\n- DELETE /jobs/{job_id} - Delete job posting\n- GET /jobs/{job_id}/applications - Get job applications\n\n#### DID Management (/api/v1/did):\n- POST /create - Create new DID\n- GET /{did} - Resolve DID document\n- PUT /{did} - Update DID document\n- DELETE /{did} - Deactivate DID\n- POST /{did}/keys - Add verification key\n- DELETE /{did}/keys/{key_id} - Remove key\n- GET /verify/{did} - Verify DID authenticity\n\n#### Blockchain (/api/v1/blockchain-credentials):\n- POST /deploy - Deploy credential to blockchain\n- GET /verify/{hash} - Verify credential on blockchain\n- GET /transaction/{tx_hash} - Get transaction details\n- GET /credential/{credential_id}/blockchain - Get blockchain info\n\n#### QR Code & Verification (/api/v1/qr-verification):\n- POST /generate - Generate QR code for credential\n- POST /verify - Verify QR code\n- GET /shared/{share_token} - Access shared credential via token\n- POST /scan - Scan and decode QR code\n\n#### RBAC (Role-Based Access Control):\n- GET /api/v1/roles - List available roles\n- GET /api/v1/permissions - List permissions\n- POST /api/v1/users/{user_id}/roles - Assign role to user\n- DELETE /api/v1/users/{user_id}/roles - Remove user role\n\n## WORKFLOW EXAMPLES\n\n### Credential Issuance Flow:\n1. Institution creates credential template\n2. Uploads learner data (CSV or manual entry)\n3. System generates DIDs and blockchain records\n4. Credentials issued with QR codes\n5. Learners receive credentials in their wallet\n6. PDFs generated and stored in blob storage\n\n### Credential Verification Flow:\n1. Employer scans QR code from credential\n2. System decodes QR and retrieves blockchain hash\n3. Verifies credential on blockchain\n4. Displays credential details and verification status\n5. Shows issuer information and timestamp\n\n### KYC Flow:\n1. User uploads identity documents\n2. OCR extracts information from documents\n3. System validates extracted data\n4. Admin reviews and approves KYC\n5. User receives verified status\n\n## SECURITY FEATURES:\n- JWT-based authentication with secure token management\n- Role-based access control (RBAC)\n- Password hashing with bcrypt\n- Blockchain immutability for credential integrity\n- Secure file storage with Azure Blob Storage\n- API rate limiting and CORS protection\n- Middleware for request validation\n\n## COMMON REQUEST/RESPONSE EXAMPLES:\n\n### Login Request:\nPOST /api/v1/auth/login\n{\n  "email": "user@example.com",\n  "password": "securepassword"\n}\nResponse: { "access_token": "jwt_token", "token_type": "bearer" }\n\n### Share Credential:\nPOST /api/v1/learner/credentials/share\n{\n  "credential_id": "cred_123",\n  "share_type": "qr_code",\n  "scope": "public",\n  "expires_in_days": 30\n}\n\n### Bulk Credential Upload CSV Format:\nlearner_email,credential_type,course_name,grade,issue_date\njohn@example.com,certificate,Machine Learning,A,2024-01-15\njane@example.com,degree,Data Science,A+,2024-01-15\n\n### Search Candidates:\nPOST /api/v1/employer/search\n{\n  "skills": ["Python", "Machine Learning"],\n  "location": "Mumbai",\n  "min_experience": 2,\n  "credential_types": ["certificate", "degree"]\n}\n\n## COMMON ISSUES & SOLUTIONS:\n\n### Authentication Issues:\n- **Token expired**: JWT tokens expire after 24 hours, user needs to login again\n- **Invalid credentials**: Check email and password are correct\n- **Role mismatch**: User role doesn\'t have permission for the endpoint\n- **Solution**: Verify credentials, check token expiration, ensure correct role assigned\n\n### Credential Verification Issues:\n- **QR code unreadable**: Ensure QR code image is clear, good lighting\n- **Blockchain verification fails**: Check internet connection, blockchain network status\n- **Credential revoked**: Institution may have revoked the credential\n- **Hash mismatch**: Credential data has been tampered with\n- **Solution**: Re-generate QR code, verify on blockchain explorer, contact issuer\n\n### Upload Issues:\n- **File too large**: Maximum file size is 10MB for documents, 5MB for images\n- **Invalid format**: Supported formats - CSV (bulk), PDF/JPEG/PNG (documents)\n- **CSV format error**: Check column headers match required format\n- **Missing required fields**: Ensure all mandatory fields are present\n- **Solution**: Compress files, use correct format, validate CSV structure\n\n### API Integration:\n- **Missing API key**: Get API key from Institution dashboard > API Keys section\n- **Invalid API key**: Key may be revoked or expired, generate new one\n- **Rate limiting**: Maximum 100 requests per minute per key\n- **CORS errors**: Ensure domain is whitelisted in API settings\n- **Solution**: Include "Authorization: Bearer {api_key}" in headers, check rate limits\n\n### Bulk Issuance Issues:\n- **Some credentials failed**: Check batch status endpoint for detailed errors\n- **Processing taking long**: Large batches (>1000) may take 5-10 minutes\n- **Duplicate entries**: System will skip duplicate learner_email entries\n- **Solution**: Check batch status, wait for completion, remove duplicates from CSV\n\n### Blockchain Deployment Issues:\n- **Transaction pending**: Blockchain confirmation can take 1-2 minutes\n- **Gas fees**: Ensure sufficient funds in institution\'s blockchain wallet\n- **Network congestion**: High network traffic may delay transactions\n- **Solution**: Wait for confirmation, check wallet balance, retry during low traffic\n\n## HELPFUL TIPS:\n- All credentials are stored on blockchain for immutability\n- QR codes contain blockchain hash for verification\n- Multi-language support available (English, Hindi, Spanish, French, German)\n- Accessibility features include text-to-speech and high contrast modes\n- Mobile responsive design for all screens\n\n## NAVIGATION PATHS:\n- Dashboard: /dashboard/[role]\n- Profile: /dashboard/profile\n- Credentials: /dashboard/profile/credentials\n- Issue Credential: /dashboard/institution/credentials\n- Verify Credential: /dashboard/employer/verify-credentials\n- API Docs: /dashboard/issuer/api-docs\n\nWhen helping users:\n1. Identify their role to provide relevant information\n2. Be concise but comprehensive\n3. Provide step-by-step guidance when needed\n4. Reference specific features or endpoints when relevant\n5. Suggest best practices for credential management\n6. Help troubleshoot common issues\n7. Guide users to appropriate sections of the platform\n\nAlways maintain a helpful, professional, and friendly tone.';
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/CredApp/src/components/chatbot/AIChatbot.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AIChatbot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CredApp/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CredApp/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Paper$2f$Paper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paper$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/material/esm/Paper/Paper.js [app-client] (ecmascript) <export default as Paper>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/material/esm/IconButton/IconButton.js [app-client] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/material/esm/TextField/TextField.js [app-client] (ecmascript) <export default as TextField>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Fab$2f$Fab$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fab$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/material/esm/Fab/Fab.js [app-client] (ecmascript) <export default as Fab>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Collapse$2f$Collapse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Collapse$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/material/esm/Collapse/Collapse.js [app-client] (ecmascript) <export default as Collapse>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Avatar$2f$Avatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/material/esm/Avatar/Avatar.js [app-client] (ecmascript) <export default as Avatar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/material/esm/CircularProgress/CircularProgress.js [app-client] (ecmascript) <export default as CircularProgress>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tooltip$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tooltip$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/material/esm/Tooltip/Tooltip.js [app-client] (ecmascript) <export default as Tooltip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Badge$2f$Badge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Badge$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/material/esm/Badge/Badge.js [app-client] (ecmascript) <export default as Badge>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Chat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/icons-material/esm/Chat.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Close$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/icons-material/esm/Close.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/icons-material/esm/Send.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$SmartToy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/icons-material/esm/SmartToy.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Person$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/icons-material/esm/Person.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Minimize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/icons-material/esm/Minimize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$DeleteOutline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/icons-material/esm/DeleteOutline.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ContentCopy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/icons-material/esm/ContentCopy.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$src$2f$services$2f$openrouter$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CredApp/src/services/openrouter.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$src$2f$config$2f$chatbot$2d$context$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CredApp/src/config/chatbot-context.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$src$2f$hooks$2f$useAuth$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CredApp/src/hooks/useAuth.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
function AIChatbot() {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMinimized, setIsMinimized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [unreadCount, setUnreadCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$src$2f$hooks$2f$useAuth$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    // Load messages from localStorage on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AIChatbot.useEffect": ()=>{
            const savedMessages = localStorage.getItem('chatbot-messages');
            if (savedMessages) {
                try {
                    const parsed = JSON.parse(savedMessages);
                    setMessages(parsed.map({
                        "AIChatbot.useEffect": (msg)=>({
                                ...msg,
                                timestamp: new Date(msg.timestamp)
                            })
                    }["AIChatbot.useEffect"]));
                } catch (error) {
                    console.error('Error loading saved messages:', error);
                }
            } else {
                // Welcome message
                const welcomeMessage = {
                    id: Date.now().toString(),
                    role: 'assistant',
                    content: "Hello".concat((user === null || user === void 0 ? void 0 : user.full_name) ? " ".concat(user.full_name) : '', "! 👋 I'm your CredApp AI assistant. I can help you with:\n\n• Understanding platform features\n• Navigating the dashboard\n• Credential management\n• Troubleshooting issues\n• API integration guidance\n• Best practices\n\nHow can I assist you today?"),
                    timestamp: new Date()
                };
                setMessages([
                    welcomeMessage
                ]);
            }
        }
    }["AIChatbot.useEffect"], [
        user === null || user === void 0 ? void 0 : user.full_name
    ]);
    // Save messages to localStorage whenever they change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AIChatbot.useEffect": ()=>{
            if (messages.length > 0) {
                localStorage.setItem('chatbot-messages', JSON.stringify(messages));
            }
        }
    }["AIChatbot.useEffect"], [
        messages
    ]);
    // Auto-scroll to bottom
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AIChatbot.useEffect": ()=>{
            if (messagesEndRef.current && !isMinimized) {
                messagesEndRef.current.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    }["AIChatbot.useEffect"], [
        messages,
        isMinimized
    ]);
    // Track unread messages
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AIChatbot.useEffect": ()=>{
            if (!isOpen && messages.length > 0) {
                const lastMessage = messages[messages.length - 1];
                if (lastMessage.role === 'assistant') {
                    setUnreadCount({
                        "AIChatbot.useEffect": (prev)=>prev + 1
                    }["AIChatbot.useEffect"]);
                }
            } else {
                setUnreadCount(0);
            }
        }
    }["AIChatbot.useEffect"], [
        messages,
        isOpen
    ]);
    const handleSendMessage = async ()=>{
        if (!input.trim() || isLoading) return;
        const userMessage = {
            id: Date.now().toString(),
            role: 'user',
            content: input.trim(),
            timestamp: new Date()
        };
        setMessages((prev)=>[
                ...prev,
                userMessage
            ]);
        setInput('');
        setIsLoading(true);
        try {
            // Build conversation history for API
            const conversationHistory = messages.map((msg)=>({
                    role: msg.role,
                    content: msg.content
                }));
            // Add user context to system prompt
            const userContext = user ? "\n\nCurrent user: ".concat(user.full_name, " (Role: ").concat(user.role, ")") : '';
            const enhancedContext = __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$src$2f$config$2f$chatbot$2d$context$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHATBOT_SYSTEM_CONTEXT"] + userContext;
            // Get AI response
            const aiResponse = await __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$src$2f$services$2f$openrouter$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openRouterService"].sendMessage(input.trim(), conversationHistory, enhancedContext);
            const assistantMessage = {
                id: (Date.now() + 1).toString(),
                role: 'assistant',
                content: aiResponse,
                timestamp: new Date()
            };
            setMessages((prev)=>[
                    ...prev,
                    assistantMessage
                ]);
        } catch (error) {
            console.error('Error sending message:', error);
            const errorMessage = {
                id: (Date.now() + 1).toString(),
                role: 'assistant',
                content: '❌ Sorry, I encountered an error. Please make sure the OpenRouter API key is configured. You can try again or rephrase your question.',
                timestamp: new Date()
            };
            setMessages((prev)=>[
                    ...prev,
                    errorMessage
                ]);
        } finally{
            setIsLoading(false);
        }
    };
    const handleKeyPress = (e)=>{
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };
    const clearChat = ()=>{
        setMessages([]);
        localStorage.removeItem('chatbot-messages');
        const welcomeMessage = {
            id: Date.now().toString(),
            role: 'assistant',
            content: "Chat cleared! How can I help you?",
            timestamp: new Date()
        };
        setMessages([
            welcomeMessage
        ]);
    };
    const copyMessage = (content)=>{
        navigator.clipboard.writeText(content);
    };
    const toggleOpen = ()=>{
        setIsOpen(!isOpen);
        if (!isOpen) {
            setIsMinimized(false);
            setUnreadCount(0);
        }
    };
    const toggleMinimize = ()=>{
        setIsMinimized(!isMinimized);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Fab$2f$Fab$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fab$3e$__["Fab"], {
                color: "primary",
                "aria-label": "chat",
                onClick: toggleOpen,
                sx: {
                    position: 'fixed',
                    bottom: 24,
                    right: 90,
                    zIndex: 1200,
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    '&:hover': {
                        background: 'linear-gradient(135deg, #5568d3 0%, #6a4193 100%)'
                    }
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Badge$2f$Badge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Badge$3e$__["Badge"], {
                    badgeContent: unreadCount,
                    color: "error",
                    children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Close$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/CredApp/src/components/chatbot/AIChatbot.tsx",
                        lineNumber: 217,
                        columnNumber: 21
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Chat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/CredApp/src/components/chatbot/AIChatbot.tsx",
                        lineNumber: 217,
                        columnNumber: 37
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/CredApp/src/components/chatbot/AIChatbot.tsx",
                    lineNumber: 216,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/CredApp/src/components/chatbot/AIChatbot.tsx",
                lineNumber: 201,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Collapse$2f$Collapse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Collapse$3e$__["Collapse"], {
                in: isOpen,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Paper$2f$Paper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paper$3e$__["Paper"], {
                    elevation: 8,
                    sx: {
                        position: 'fixed',
                        bottom: 100,
                        right: 90,
                        width: {
                            xs: 'calc(100% - 48px)',
                            sm: 400
                        },
                        maxWidth: 400,
                        height: isMinimized ? 'auto' : 600,
                        maxHeight: isMinimized ? 'auto' : '80vh',
                        zIndex: 1200,
                        display: 'flex',
                        flexDirection: 'column',
                        overflow: 'hidden',
                        borderRadius: 2,
                        boxShadow: '0 8px 32px rgba(0,0,0,0.12)'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            sx: {
                                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                color: 'white',
                                p: 2,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                    sx: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 1
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Avatar$2f$Avatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__["Avatar"], {
                                            sx: {
                                                bgcolor: 'rgba(255,255,255,0.2)'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$SmartToy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                fileName: "[project]/CredApp/src/components/chatbot/AIChatbot.tsx",
                                                lineNumber: 254,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/CredApp/src/components/chatbot/AIChatbot.tsx",
                                            lineNumber: 253,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                    variant: "h6",
                                                    sx: {
                                                        fontWeight: 600,
                                                        fontSize: '1rem'
                                                    },
                                                    children: "CredApp AI Assistant"
                                                }, void 0, false, {
                                                    fileName: "[project]/CredApp/src/components/chatbot/AIChatbot.tsx",
                                                    lineNumber: 257,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                    variant: "caption",
                                                    sx: {
                                                        opacity: 0.9
                                                    },
                                                    children: isLoading ? 'Typing...' : 'Online'
                                                }, void 0, false, {
                                                    fileName: "[project]/CredApp/src/components/chatbot/AIChatbot.tsx",
                                                    lineNumber: 260,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/CredApp/src/components/chatbot/AIChatbot.tsx",
                                            lineNumber: 256,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/CredApp/src/components/chatbot/AIChatbot.tsx",
                                    lineNumber: 252,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tooltip$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tooltip$3e$__["Tooltip"], {
                                            title: "Clear chat",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                                size: "small",
                                                onClick: clearChat,
                                                sx: {
                                                    color: 'white'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$DeleteOutline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    fontSize: "small"
                                                }, void 0, false, {
                                                    fileName: "[project]/CredApp/src/components/chatbot/AIChatbot.tsx",
                                                    lineNumber: 268,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/CredApp/src/components/chatbot/AIChatbot.tsx",
                                                lineNumber: 267,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/CredApp/src/components/chatbot/AIChatbot.tsx",
                                            lineNumber: 266,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tooltip$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tooltip$3e$__["Tooltip"], {
                                            title: isMinimized ? 'Expand' : 'Minimize',
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                                size: "small",
                                                onClick: toggleMinimize,
                                                sx: {
                                                    color: 'white'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Minimize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    fontSize: "small"
                                                }, void 0, false, {
                                                    fileName: "[project]/CredApp/src/components/chatbot/AIChatbot.tsx",
                                                    lineNumber: 273,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/CredApp/src/components/chatbot/AIChatbot.tsx",
                                                lineNumber: 272,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/CredApp/src/components/chatbot/AIChatbot.tsx",
                                            lineNumber: 271,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tooltip$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tooltip$3e$__["Tooltip"], {
                                            title: "Close",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                                size: "small",
                                                onClick: toggleOpen,
                                                sx: {
                                                    color: 'white'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Close$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    fontSize: "small"
                                                }, void 0, false, {
                                                    fileName: "[project]/CredApp/src/components/chatbot/AIChatbot.tsx",
                                                    lineNumber: 278,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/CredApp/src/components/chatbot/AIChatbot.tsx",
                                                lineNumber: 277,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/CredApp/src/components/chatbot/AIChatbot.tsx",
                                            lineNumber: 276,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/CredApp/src/components/chatbot/AIChatbot.tsx",
                                    lineNumber: 265,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/CredApp/src/components/chatbot/AIChatbot.tsx",
                            lineNumber: 242,
                            columnNumber: 11
                        }, this),
                        !isMinimized && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                    sx: {
                                        flex: 1,
                                        overflow: 'auto',
                                        p: 2,
                                        backgroundColor: '#f5f5f5',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: 2
                                    },
                                    children: [
                                        messages.map((message)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                sx: {
                                                    display: 'flex',
                                                    gap: 1,
                                                    alignItems: 'flex-start',
                                                    flexDirection: message.role === 'user' ? 'row-reverse' : 'row'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Avatar$2f$Avatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__["Avatar"], {
                                                        sx: {
                                                            width: 32,
                                                            height: 32,
                                                            bgcolor: message.role === 'user' ? '#667eea' : '#764ba2'
                                                        },
                                                        children: message.role === 'user' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Person$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            sx: {
                                                                fontSize: 20
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/CredApp/src/components/chatbot/AIChatbot.tsx",
                                                            lineNumber: 316,
                                                            columnNumber: 25
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$SmartToy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            sx: {
                                                                fontSize: 20
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/CredApp/src/components/chatbot/AIChatbot.tsx",
                                                            lineNumber: 318,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/CredApp/src/components/chatbot/AIChatbot.tsx",
                                                        lineNumber: 308,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                        sx: {
                                                            maxWidth: '75%'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Paper$2f$Paper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paper$3e$__["Paper"], {
                                                                elevation: 1,
                                                                sx: {
                                                                    p: 1.5,
                                                                    backgroundColor: message.role === 'user' ? '#667eea' : 'white',
                                                                    color: message.role === 'user' ? 'white' : 'text.primary',
                                                                    borderRadius: 2,
                                                                    position: 'relative'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                                        variant: "body2",
                                                                        sx: {
                                                                            whiteSpace: 'pre-wrap',
                                                                            wordBreak: 'break-word'
                                                                        },
                                                                        children: message.content
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/CredApp/src/components/chatbot/AIChatbot.tsx",
                                                                        lineNumber: 332,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    message.role === 'assistant' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tooltip$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tooltip$3e$__["Tooltip"], {
                                                                        title: "Copy",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                                                            size: "small",
                                                                            onClick: ()=>copyMessage(message.content),
                                                                            sx: {
                                                                                position: 'absolute',
                                                                                top: 4,
                                                                                right: 4,
                                                                                opacity: 0.6,
                                                                                '&:hover': {
                                                                                    opacity: 1
                                                                                }
                                                                            },
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ContentCopy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                sx: {
                                                                                    fontSize: 14
                                                                                }
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/CredApp/src/components/chatbot/AIChatbot.tsx",
                                                                                lineNumber: 354,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/CredApp/src/components/chatbot/AIChatbot.tsx",
                                                                            lineNumber: 343,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/CredApp/src/components/chatbot/AIChatbot.tsx",
                                                                        lineNumber: 342,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/CredApp/src/components/chatbot/AIChatbot.tsx",
                                                                lineNumber: 322,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                                variant: "caption",
                                                                sx: {
                                                                    mt: 0.5,
                                                                    opacity: 0.6,
                                                                    display: 'block',
                                                                    textAlign: message.role === 'user' ? 'right' : 'left'
                                                                },
                                                                children: message.timestamp.toLocaleTimeString([], {
                                                                    hour: '2-digit',
                                                                    minute: '2-digit'
                                                                })
                                                            }, void 0, false, {
                                                                fileName: "[project]/CredApp/src/components/chatbot/AIChatbot.tsx",
                                                                lineNumber: 359,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/CredApp/src/components/chatbot/AIChatbot.tsx",
                                                        lineNumber: 321,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, message.id, true, {
                                                fileName: "[project]/CredApp/src/components/chatbot/AIChatbot.tsx",
                                                lineNumber: 299,
                                                columnNumber: 19
                                            }, this)),
                                        isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                            sx: {
                                                display: 'flex',
                                                gap: 1,
                                                alignItems: 'center'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Avatar$2f$Avatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__["Avatar"], {
                                                    sx: {
                                                        width: 32,
                                                        height: 32,
                                                        bgcolor: '#764ba2'
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$SmartToy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        sx: {
                                                            fontSize: 20
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/CredApp/src/components/chatbot/AIChatbot.tsx",
                                                        lineNumber: 379,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/CredApp/src/components/chatbot/AIChatbot.tsx",
                                                    lineNumber: 378,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Paper$2f$Paper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paper$3e$__["Paper"], {
                                                    elevation: 1,
                                                    sx: {
                                                        p: 1.5,
                                                        borderRadius: 2
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__["CircularProgress"], {
                                                        size: 20
                                                    }, void 0, false, {
                                                        fileName: "[project]/CredApp/src/components/chatbot/AIChatbot.tsx",
                                                        lineNumber: 382,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/CredApp/src/components/chatbot/AIChatbot.tsx",
                                                    lineNumber: 381,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/CredApp/src/components/chatbot/AIChatbot.tsx",
                                            lineNumber: 377,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            ref: messagesEndRef
                                        }, void 0, false, {
                                            fileName: "[project]/CredApp/src/components/chatbot/AIChatbot.tsx",
                                            lineNumber: 386,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/CredApp/src/components/chatbot/AIChatbot.tsx",
                                    lineNumber: 287,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                    sx: {
                                        p: 2,
                                        backgroundColor: 'white',
                                        borderTop: '1px solid #e0e0e0'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                            sx: {
                                                display: 'flex',
                                                gap: 1
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
                                                    fullWidth: true,
                                                    size: "small",
                                                    placeholder: "Ask me anything about CredApp...",
                                                    value: input,
                                                    onChange: (e)=>setInput(e.target.value),
                                                    onKeyPress: handleKeyPress,
                                                    disabled: isLoading,
                                                    multiline: true,
                                                    maxRows: 3,
                                                    sx: {
                                                        '& .MuiOutlinedInput-root': {
                                                            borderRadius: 2
                                                        }
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/CredApp/src/components/chatbot/AIChatbot.tsx",
                                                    lineNumber: 398,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                                    color: "primary",
                                                    onClick: handleSendMessage,
                                                    disabled: !input.trim() || isLoading,
                                                    sx: {
                                                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                                        color: 'white',
                                                        '&:hover': {
                                                            background: 'linear-gradient(135deg, #5568d3 0%, #6a4193 100%)'
                                                        },
                                                        '&.Mui-disabled': {
                                                            background: '#e0e0e0',
                                                            color: '#9e9e9e'
                                                        }
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                        fileName: "[project]/CredApp/src/components/chatbot/AIChatbot.tsx",
                                                        lineNumber: 430,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/CredApp/src/components/chatbot/AIChatbot.tsx",
                                                    lineNumber: 414,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/CredApp/src/components/chatbot/AIChatbot.tsx",
                                            lineNumber: 397,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                            variant: "caption",
                                            sx: {
                                                mt: 1,
                                                opacity: 0.6,
                                                display: 'block'
                                            },
                                            children: "Powered by Credhub.AI"
                                        }, void 0, false, {
                                            fileName: "[project]/CredApp/src/components/chatbot/AIChatbot.tsx",
                                            lineNumber: 433,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/CredApp/src/components/chatbot/AIChatbot.tsx",
                                    lineNumber: 390,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true)
                    ]
                }, void 0, true, {
                    fileName: "[project]/CredApp/src/components/chatbot/AIChatbot.tsx",
                    lineNumber: 223,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/CredApp/src/components/chatbot/AIChatbot.tsx",
                lineNumber: 222,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(AIChatbot, "2LbdGXmYSWT5mt/rXlVvuKtqHFU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$src$2f$hooks$2f$useAuth$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = AIChatbot;
var _c;
__turbopack_context__.k.register(_c, "AIChatbot");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/CredApp/src/components/layout/DashboardLayout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CredApp/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CredApp/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Drawer$2f$Drawer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Drawer$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/material/esm/Drawer/Drawer.js [app-client] (ecmascript) <export default as Drawer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$AppBar$2f$AppBar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AppBar$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/material/esm/AppBar/AppBar.js [app-client] (ecmascript) <export default as AppBar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Divider$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/material/esm/Divider/Divider.js [app-client] (ecmascript) <export default as Divider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/material/esm/IconButton/IconButton.js [app-client] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Avatar$2f$Avatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/material/esm/Avatar/Avatar.js [app-client] (ecmascript) <export default as Avatar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Menu$2f$Menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/material/esm/Menu/Menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/material/esm/MenuItem/MenuItem.js [app-client] (ecmascript) <export default as MenuItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Badge$2f$Badge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Badge$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/material/esm/Badge/Badge.js [app-client] (ecmascript) <export default as Badge>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$InputBase$2f$InputBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InputBase$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/material/esm/InputBase/InputBase.js [app-client] (ecmascript) <export default as InputBase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/system/esm/colorManipulator/colorManipulator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/material/esm/styles/useTheme.js [app-client] (ecmascript) <export default as useTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useMediaQuery$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useMediaQuery$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/material/esm/useMediaQuery/index.js [app-client] (ecmascript) <export default as useMediaQuery>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Breadcrumbs$2f$Breadcrumbs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Breadcrumbs$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/material/esm/Breadcrumbs/Breadcrumbs.js [app-client] (ecmascript) <export default as Breadcrumbs>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Link$2f$Link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/material/esm/Link/Link.js [app-client] (ecmascript) <export default as Link>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tooltip$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tooltip$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/material/esm/Tooltip/Tooltip.js [app-client] (ecmascript) <export default as Tooltip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/material/esm/CircularProgress/CircularProgress.js [app-client] (ecmascript) <export default as CircularProgress>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/icons-material/esm/Menu.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Notifications$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/icons-material/esm/Notifications.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Logout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/icons-material/esm/Logout.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Refresh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/icons-material/esm/Refresh.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$NavigateNext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/icons-material/esm/NavigateNext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Home$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/icons-material/esm/Home.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$src$2f$hooks$2f$useAuth$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CredApp/src/hooks/useAuth.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$src$2f$components$2f$layout$2f$DashboardSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CredApp/src/components/layout/DashboardSidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CredApp/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$src$2f$components$2f$LanguageSelector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CredApp/src/components/LanguageSelector.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$src$2f$components$2f$chatbot$2f$AIChatbot$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CredApp/src/components/chatbot/AIChatbot.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const drawerWidth = 280;
const Main = (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('main', {
    shouldForwardProp: (prop)=>prop !== 'open'
})((param)=>{
    let { theme, open } = param;
    return {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        marginLeft: "-".concat(drawerWidth, "px"),
        ...open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen
            }),
            marginLeft: 0
        }
    };
});
const AppBarStyled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$AppBar$2f$AppBar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AppBar$3e$__["AppBar"], {
    shouldForwardProp: (prop)=>prop !== 'open'
})((param)=>{
    let { theme, open } = param;
    return {
        transition: theme.transitions.create([
            'margin',
            'width'
        ], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        ...open && {
            width: "calc(100% - ".concat(drawerWidth, "px)"),
            marginLeft: "".concat(drawerWidth, "px"),
            transition: theme.transitions.create([
                'margin',
                'width'
            ], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen
            })
        }
    };
});
const Search = (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('div')((param)=>{
    let { theme } = param;
    return {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(theme.palette.common.white, 0.25)
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto'
        }
    };
});
const SearchIconWrapper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('div')((param)=>{
    let { theme } = param;
    return {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    };
});
const StyledInputBase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$InputBase$2f$InputBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InputBase$3e$__["InputBase"])((param)=>{
    let { theme } = param;
    return {
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            paddingLeft: "calc(1em + ".concat(theme.spacing(4), ")"),
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch'
            }
        }
    };
});
function DashboardLayout(param) {
    let { children, title } = param;
    var _currentUser_full_name;
    _s();
    const [sidebarExpanded, setSidebarExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [mobileSidebarOpen, setMobileSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [anchorEl, setAnchorEl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [notificationAnchor, setNotificationAnchor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isDarkMode, setIsDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [fontSize, setFontSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('medium');
    const [isLoggingOut, setIsLoggingOut] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { user, logout, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$src$2f$hooks$2f$useAuth$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__["useTheme"])();
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useMediaQuery$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useMediaQuery$3e$__["useMediaQuery"])(theme.breakpoints.down('md'));
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // Determine user role from current path if not available in user object
    const getRoleFromPath = (path)=>{
        if (path.includes('/dashboard/institution')) return 'institution';
        if (path.includes('/dashboard/employer')) return 'employer';
        if (path.includes('/dashboard/admin')) return 'admin';
        return 'learner'; // default
    };
    // Redirect to register if user is not logged in
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardLayout.useEffect": ()=>{
            if (!isLoading && !user) {
                router.push('/auth/register');
            }
        }
    }["DashboardLayout.useEffect"], [
        isLoading,
        user,
        router
    ]);
    // Provide default user data if not logged in (temporary fallback)
    const currentUser = user || {
        id: 'default-user',
        full_name: 'Demo User',
        email: 'demo@credify.com',
        role: getRoleFromPath(pathname),
        is_verified: true,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    };
    // Ensure user has a role (either from user object or derived from path)
    const userRole = currentUser.role || getRoleFromPath(pathname);
    const handleDrawerToggle = ()=>{
        if (isMobile) {
            setMobileSidebarOpen(!mobileSidebarOpen);
        } else {
            setSidebarExpanded(!sidebarExpanded);
        }
    };
    const handleMobileSidebarClose = ()=>{
        setMobileSidebarOpen(false);
    };
    const handleProfileMenuOpen = (event)=>{
        setAnchorEl(event.currentTarget);
    };
    const handleProfileMenuClose = ()=>{
        setAnchorEl(null);
    };
    const handleNotificationOpen = (event)=>{
        setNotificationAnchor(event.currentTarget);
    };
    const handleNotificationClose = ()=>{
        setNotificationAnchor(null);
    };
    const handleLogout = async ()=>{
        try {
            setIsLoggingOut(true);
            await logout();
            handleProfileMenuClose();
            // Redirect to login page after successful logout
            router.push('/auth/login');
        } catch (error) {
            console.error('Logout failed:', error);
            setIsLoggingOut(false);
        }
    };
    const handleThemeToggle = ()=>{
        setIsDarkMode(!isDarkMode);
    // You can implement actual theme switching logic here
    };
    const handleRefresh = ()=>{
        window.location.reload();
    };
    const handleAppsMenu = ()=>{
        // You can implement apps menu logic here
        console.log('Apps menu clicked');
    };
    const handleFontSizeIncrease = ()=>{
        if (fontSize === 'small') {
            setFontSize('medium');
        } else if (fontSize === 'medium') {
            setFontSize('large');
        }
    // Don't allow increasing beyond large
    };
    const handleFontSizeDecrease = ()=>{
        if (fontSize === 'large') {
            setFontSize('medium');
        } else if (fontSize === 'medium') {
            setFontSize('small');
        }
    // Don't allow decreasing beyond small
    };
    const handleFontSizeReset = ()=>{
        setFontSize('medium');
    };
    // Apply font size to the entire dashboard layout
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardLayout.useEffect": ()=>{
            const rootElement = document.documentElement;
            if (rootElement) {
                // Use more conservative font size scaling for better accessibility
                const fontSizeMap = {
                    small: '0.9rem',
                    medium: '1rem',
                    large: '1.05rem' // Slightly larger, not too overwhelming
                };
                rootElement.style.fontSize = fontSizeMap[fontSize];
            }
            // Cleanup function to reset font size when component unmounts
            return ({
                "DashboardLayout.useEffect": ()=>{
                    const rootElement = document.documentElement;
                    if (rootElement) {
                        rootElement.style.fontSize = '1rem'; // Reset to default
                    }
                }
            })["DashboardLayout.useEffect"];
        }
    }["DashboardLayout.useEffect"], [
        fontSize
    ]);
    // Generate breadcrumbs from pathname
    const generateBreadcrumbs = ()=>{
        const paths = (pathname === null || pathname === void 0 ? void 0 : pathname.split('/').filter(Boolean)) || [];
        return paths.map((path, index)=>{
            const href = '/' + paths.slice(0, index + 1).join('/');
            const label = path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' ');
            const isLast = index === paths.length - 1;
            return {
                href,
                label,
                isLast
            };
        });
    };
    const breadcrumbs = generateBreadcrumbs();
    const getRoleDisplayName = (role)=>{
        // Use the dynamically determined role from the current dashboard path
        const currentRole = role || userRole;
        switch(currentRole){
            case 'learner':
                return 'Learner';
            case 'employer':
                return 'Employer';
            case 'institution':
                return 'Institution';
            case 'admin':
                return 'Administrator';
            default:
                return 'User';
        }
    };
    const getRoleColor = (role)=>{
        // Use the dynamically determined role from the current dashboard path
        const currentRole = role || userRole;
        switch(currentRole){
            case 'learner':
                return theme.palette.primary.main;
            case 'employer':
                return theme.palette.secondary.main;
            case 'institution':
                return theme.palette.warning.main;
            case 'admin':
                return theme.palette.error.main;
            default:
                return theme.palette.grey[500];
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-screen bg-gray-50 overflow-hidden",
        children: [
            !isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$src$2f$components$2f$layout$2f$DashboardSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                sidebarExpanded: sidebarExpanded,
                setSidebarExpanded: setSidebarExpanded,
                userRole: userRole
            }, void 0, false, {
                fileName: "[project]/CredApp/src/components/layout/DashboardLayout.tsx",
                lineNumber: 336,
                columnNumber: 9
            }, this),
            isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Drawer$2f$Drawer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Drawer$3e$__["Drawer"], {
                variant: "temporary",
                anchor: "left",
                open: mobileSidebarOpen,
                onClose: handleMobileSidebarClose,
                ModalProps: {
                    keepMounted: true
                },
                sx: {
                    '& .MuiDrawer-paper': {
                        width: 280,
                        boxSizing: 'border-box'
                    }
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$src$2f$components$2f$layout$2f$DashboardSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    sidebarExpanded: true,
                    setSidebarExpanded: ()=>{},
                    userRole: userRole,
                    onMobileClose: handleMobileSidebarClose
                }, void 0, false, {
                    fileName: "[project]/CredApp/src/components/layout/DashboardLayout.tsx",
                    lineNumber: 360,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/CredApp/src/components/layout/DashboardLayout.tsx",
                lineNumber: 345,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col overflow-hidden min-w-0 h-screen ".concat(isMobile ? '' : sidebarExpanded ? 'ml-0' : ''),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white border-b border-gray-200 px-3 sm:px-4 lg:px-6 py-3 sm:py-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 min-w-0 flex-1",
                                    children: [
                                        isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                            edge: "start",
                                            color: "inherit",
                                            "aria-label": "menu",
                                            onClick: handleDrawerToggle,
                                            sx: {
                                                mr: 1,
                                                color: '#6b7280',
                                                '&:hover': {
                                                    backgroundColor: 'rgba(0, 0, 0, 0.04)',
                                                    color: '#374151'
                                                }
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                fileName: "[project]/CredApp/src/components/layout/DashboardLayout.tsx",
                                                lineNumber: 391,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/CredApp/src/components/layout/DashboardLayout.tsx",
                                            lineNumber: 377,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-1 sm:gap-2 min-w-0 flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                    variant: isMobile ? "h6" : "h5",
                                                    sx: {
                                                        fontWeight: 700,
                                                        color: '#1e293b',
                                                        fontSize: {
                                                            xs: '1.125rem',
                                                            sm: '1.25rem',
                                                            md: '1.5rem'
                                                        }
                                                    },
                                                    children: title || 'Dashboard Overview'
                                                }, void 0, false, {
                                                    fileName: "[project]/CredApp/src/components/layout/DashboardLayout.tsx",
                                                    lineNumber: 397,
                                                    columnNumber: 17
                                                }, this),
                                                breadcrumbs.length > 0 && !isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Breadcrumbs$2f$Breadcrumbs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Breadcrumbs$3e$__["Breadcrumbs"], {
                                                    separator: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$NavigateNext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        fontSize: "small"
                                                    }, void 0, false, {
                                                        fileName: "[project]/CredApp/src/components/layout/DashboardLayout.tsx",
                                                        lineNumber: 411,
                                                        columnNumber: 32
                                                    }, void 0),
                                                    "aria-label": "breadcrumb",
                                                    sx: {
                                                        fontSize: '0.875rem'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Link$2f$Link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link$3e$__["Link"], {
                                                            underline: "hover",
                                                            sx: {
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                color: '#6b7280',
                                                                cursor: 'pointer',
                                                                '&:hover': {
                                                                    color: '#374151'
                                                                }
                                                            },
                                                            onClick: ()=>router.push('/dashboard'),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Home$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    sx: {
                                                                        mr: 0.5,
                                                                        fontSize: '1rem'
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/CredApp/src/components/layout/DashboardLayout.tsx",
                                                                    lineNumber: 426,
                                                                    columnNumber: 23
                                                                }, this),
                                                                "Dashboard"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/CredApp/src/components/layout/DashboardLayout.tsx",
                                                            lineNumber: 415,
                                                            columnNumber: 21
                                                        }, this),
                                                        breadcrumbs.map((crumb, index)=>crumb.isLast ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                                sx: {
                                                                    color: '#1e293b',
                                                                    fontWeight: 600,
                                                                    fontSize: '0.875rem'
                                                                },
                                                                children: crumb.label
                                                            }, index, false, {
                                                                fileName: "[project]/CredApp/src/components/layout/DashboardLayout.tsx",
                                                                lineNumber: 431,
                                                                columnNumber: 25
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Link$2f$Link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link$3e$__["Link"], {
                                                                underline: "hover",
                                                                sx: {
                                                                    color: '#6b7280',
                                                                    cursor: 'pointer',
                                                                    fontSize: '0.875rem',
                                                                    '&:hover': {
                                                                        color: '#374151'
                                                                    }
                                                                },
                                                                onClick: ()=>router.push(crumb.href),
                                                                children: crumb.label
                                                            }, index, false, {
                                                                fileName: "[project]/CredApp/src/components/layout/DashboardLayout.tsx",
                                                                lineNumber: 442,
                                                                columnNumber: 25
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/CredApp/src/components/layout/DashboardLayout.tsx",
                                                    lineNumber: 410,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/CredApp/src/components/layout/DashboardLayout.tsx",
                                            lineNumber: 395,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/CredApp/src/components/layout/DashboardLayout.tsx",
                                    lineNumber: 374,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1 sm:gap-2 lg:gap-3 flex-shrink-0",
                                    children: [
                                        !isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                    sx: {
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: 0.5,
                                                        ml: 1
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tooltip$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tooltip$3e$__["Tooltip"], {
                                                            title: "Decrease font size",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                                                size: "small",
                                                                onClick: handleFontSizeDecrease,
                                                                disabled: fontSize === 'small',
                                                                sx: {
                                                                    color: fontSize === 'small' ? '#d1d5db' : '#6b7280',
                                                                    '&:hover': {
                                                                        backgroundColor: fontSize === 'small' ? 'transparent' : 'rgba(0, 0, 0, 0.04)',
                                                                        color: fontSize === 'small' ? '#d1d5db' : '#374151'
                                                                    },
                                                                    padding: '6px',
                                                                    minWidth: '32px',
                                                                    minHeight: '32px'
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                                    sx: {
                                                                        fontSize: '0.75rem',
                                                                        fontWeight: 700,
                                                                        lineHeight: 1
                                                                    },
                                                                    children: "A-"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/CredApp/src/components/layout/DashboardLayout.tsx",
                                                                    lineNumber: 494,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/CredApp/src/components/layout/DashboardLayout.tsx",
                                                                lineNumber: 479,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/CredApp/src/components/layout/DashboardLayout.tsx",
                                                            lineNumber: 478,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tooltip$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tooltip$3e$__["Tooltip"], {
                                                            title: "Reset font size",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                                                size: "small",
                                                                onClick: handleFontSizeReset,
                                                                sx: {
                                                                    color: fontSize === 'medium' ? '#3b82f6' : '#6b7280',
                                                                    '&:hover': {
                                                                        backgroundColor: 'rgba(0, 0, 0, 0.04)',
                                                                        color: '#374151'
                                                                    },
                                                                    padding: '6px',
                                                                    minWidth: '32px',
                                                                    minHeight: '32px'
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                                    sx: {
                                                                        fontSize: '0.875rem',
                                                                        fontWeight: 700,
                                                                        lineHeight: 1
                                                                    },
                                                                    children: "A"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/CredApp/src/components/layout/DashboardLayout.tsx",
                                                                    lineNumber: 512,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/CredApp/src/components/layout/DashboardLayout.tsx",
                                                                lineNumber: 498,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/CredApp/src/components/layout/DashboardLayout.tsx",
                                                            lineNumber: 497,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tooltip$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tooltip$3e$__["Tooltip"], {
                                                            title: "Increase font size",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                                                size: "small",
                                                                onClick: handleFontSizeIncrease,
                                                                disabled: fontSize === 'large',
                                                                sx: {
                                                                    color: fontSize === 'large' ? '#d1d5db' : '#6b7280',
                                                                    '&:hover': {
                                                                        backgroundColor: fontSize === 'large' ? 'transparent' : 'rgba(0, 0, 0, 0.04)',
                                                                        color: fontSize === 'large' ? '#d1d5db' : '#374151'
                                                                    },
                                                                    padding: '6px',
                                                                    minWidth: '32px',
                                                                    minHeight: '32px'
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                                    sx: {
                                                                        fontSize: '1rem',
                                                                        fontWeight: 700,
                                                                        lineHeight: 1
                                                                    },
                                                                    children: "A+"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/CredApp/src/components/layout/DashboardLayout.tsx",
                                                                    lineNumber: 531,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/CredApp/src/components/layout/DashboardLayout.tsx",
                                                                lineNumber: 516,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/CredApp/src/components/layout/DashboardLayout.tsx",
                                                            lineNumber: 515,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/CredApp/src/components/layout/DashboardLayout.tsx",
                                                    lineNumber: 477,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Divider$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {
                                                    orientation: "vertical",
                                                    flexItem: true,
                                                    sx: {
                                                        mx: 1
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/CredApp/src/components/layout/DashboardLayout.tsx",
                                                    lineNumber: 536,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true),
                                        !isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                            size: "medium",
                                            color: "inherit",
                                            onClick: handleRefresh,
                                            sx: {
                                                color: '#6b7280',
                                                '&:hover': {
                                                    backgroundColor: 'rgba(0, 0, 0, 0.04)',
                                                    color: '#374151'
                                                }
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Refresh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                fontSize: "small"
                                            }, void 0, false, {
                                                fileName: "[project]/CredApp/src/components/layout/DashboardLayout.tsx",
                                                lineNumber: 570,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/CredApp/src/components/layout/DashboardLayout.tsx",
                                            lineNumber: 558,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$src$2f$components$2f$LanguageSelector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                            fileName: "[project]/CredApp/src/components/layout/DashboardLayout.tsx",
                                            lineNumber: 575,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                            size: isMobile ? "small" : "medium",
                                            color: "inherit",
                                            onClick: handleNotificationOpen,
                                            sx: {
                                                color: '#6b7280',
                                                '&:hover': {
                                                    backgroundColor: 'rgba(0, 0, 0, 0.04)',
                                                    color: '#374151'
                                                }
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Badge$2f$Badge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Badge$3e$__["Badge"], {
                                                badgeContent: 3,
                                                color: "error",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Notifications$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    fontSize: isMobile ? "small" : "small"
                                                }, void 0, false, {
                                                    fileName: "[project]/CredApp/src/components/layout/DashboardLayout.tsx",
                                                    lineNumber: 591,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/CredApp/src/components/layout/DashboardLayout.tsx",
                                                lineNumber: 590,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/CredApp/src/components/layout/DashboardLayout.tsx",
                                            lineNumber: 578,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                            size: isMobile ? "small" : "medium",
                                            edge: "end",
                                            "aria-label": "account of current user",
                                            onClick: handleProfileMenuOpen,
                                            color: "inherit",
                                            sx: {
                                                ml: isMobile ? 0.5 : 1
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Avatar$2f$Avatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__["Avatar"], {
                                                sx: {
                                                    width: isMobile ? 28 : 32,
                                                    height: isMobile ? 28 : 32,
                                                    bgcolor: getRoleColor()
                                                },
                                                children: (_currentUser_full_name = currentUser.full_name) === null || _currentUser_full_name === void 0 ? void 0 : _currentUser_full_name.charAt(0).toUpperCase()
                                            }, void 0, false, {
                                                fileName: "[project]/CredApp/src/components/layout/DashboardLayout.tsx",
                                                lineNumber: 604,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/CredApp/src/components/layout/DashboardLayout.tsx",
                                            lineNumber: 596,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/CredApp/src/components/layout/DashboardLayout.tsx",
                                    lineNumber: 462,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/CredApp/src/components/layout/DashboardLayout.tsx",
                            lineNumber: 373,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/CredApp/src/components/layout/DashboardLayout.tsx",
                        lineNumber: 372,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        id: "dashboard-main-content",
                        className: "flex-1 overflow-auto min-h-0 max-h-full",
                        style: {
                            transition: 'font-size 0.2s ease'
                        },
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/CredApp/src/components/layout/DashboardLayout.tsx",
                        lineNumber: 617,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/CredApp/src/components/layout/DashboardLayout.tsx",
                lineNumber: 370,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Menu$2f$Menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                anchorEl: anchorEl,
                open: Boolean(anchorEl),
                onClose: handleProfileMenuClose,
                onClick: handleProfileMenuClose,
                PaperProps: {
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1
                        }
                    }
                },
                transformOrigin: {
                    horizontal: 'right',
                    vertical: 'top'
                },
                anchorOrigin: {
                    horizontal: 'right',
                    vertical: 'bottom'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Avatar$2f$Avatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__["Avatar"], {
                                sx: {
                                    bgcolor: getRoleColor()
                                }
                            }, void 0, false, {
                                fileName: "[project]/CredApp/src/components/layout/DashboardLayout.tsx",
                                lineNumber: 651,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                        variant: "subtitle2",
                                        children: currentUser.full_name
                                    }, void 0, false, {
                                        fileName: "[project]/CredApp/src/components/layout/DashboardLayout.tsx",
                                        lineNumber: 653,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                        variant: "caption",
                                        color: "text.secondary",
                                        children: getRoleDisplayName()
                                    }, void 0, false, {
                                        fileName: "[project]/CredApp/src/components/layout/DashboardLayout.tsx",
                                        lineNumber: 654,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/CredApp/src/components/layout/DashboardLayout.tsx",
                                lineNumber: 652,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/CredApp/src/components/layout/DashboardLayout.tsx",
                        lineNumber: 650,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Divider$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {}, void 0, false, {
                        fileName: "[project]/CredApp/src/components/layout/DashboardLayout.tsx",
                        lineNumber: 659,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                        onClick: handleLogout,
                        disabled: isLoggingOut,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Logout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                fontSize: "small",
                                sx: {
                                    mr: 1
                                }
                            }, void 0, false, {
                                fileName: "[project]/CredApp/src/components/layout/DashboardLayout.tsx",
                                lineNumber: 665,
                                columnNumber: 11
                            }, this),
                            isLoggingOut ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                sx: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__["CircularProgress"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/CredApp/src/components/layout/DashboardLayout.tsx",
                                        lineNumber: 668,
                                        columnNumber: 15
                                    }, this),
                                    "Logging out..."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/CredApp/src/components/layout/DashboardLayout.tsx",
                                lineNumber: 667,
                                columnNumber: 13
                            }, this) : 'Logout'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/CredApp/src/components/layout/DashboardLayout.tsx",
                        lineNumber: 664,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/CredApp/src/components/layout/DashboardLayout.tsx",
                lineNumber: 628,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Menu$2f$Menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                anchorEl: notificationAnchor,
                open: Boolean(notificationAnchor),
                onClose: handleNotificationClose,
                PaperProps: {
                    sx: {
                        width: 320,
                        maxHeight: 400
                    }
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                    variant: "subtitle2",
                                    children: "New credential verified"
                                }, void 0, false, {
                                    fileName: "[project]/CredApp/src/components/layout/DashboardLayout.tsx",
                                    lineNumber: 688,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: "Your Machine Learning certificate has been verified"
                                }, void 0, false, {
                                    fileName: "[project]/CredApp/src/components/layout/DashboardLayout.tsx",
                                    lineNumber: 689,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/CredApp/src/components/layout/DashboardLayout.tsx",
                            lineNumber: 687,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/CredApp/src/components/layout/DashboardLayout.tsx",
                        lineNumber: 686,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                    variant: "subtitle2",
                                    children: "Profile viewed"
                                }, void 0, false, {
                                    fileName: "[project]/CredApp/src/components/layout/DashboardLayout.tsx",
                                    lineNumber: 696,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: "An employer viewed your profile"
                                }, void 0, false, {
                                    fileName: "[project]/CredApp/src/components/layout/DashboardLayout.tsx",
                                    lineNumber: 697,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/CredApp/src/components/layout/DashboardLayout.tsx",
                            lineNumber: 695,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/CredApp/src/components/layout/DashboardLayout.tsx",
                        lineNumber: 694,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                    variant: "subtitle2",
                                    children: "New skill recommendation"
                                }, void 0, false, {
                                    fileName: "[project]/CredApp/src/components/layout/DashboardLayout.tsx",
                                    lineNumber: 704,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: "Based on your profile, we recommend React.js"
                                }, void 0, false, {
                                    fileName: "[project]/CredApp/src/components/layout/DashboardLayout.tsx",
                                    lineNumber: 705,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/CredApp/src/components/layout/DashboardLayout.tsx",
                            lineNumber: 703,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/CredApp/src/components/layout/DashboardLayout.tsx",
                        lineNumber: 702,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/CredApp/src/components/layout/DashboardLayout.tsx",
                lineNumber: 678,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$src$2f$components$2f$chatbot$2f$AIChatbot$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/CredApp/src/components/layout/DashboardLayout.tsx",
                lineNumber: 713,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/CredApp/src/components/layout/DashboardLayout.tsx",
        lineNumber: 333,
        columnNumber: 5
    }, this);
}
_s(DashboardLayout, "Sikl6nfRYk6qS0ZLpZBdSJjnyzE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$src$2f$hooks$2f$useAuth$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__["useTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useMediaQuery$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useMediaQuery$3e$__["useMediaQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = DashboardLayout;
var _c;
__turbopack_context__.k.register(_c, "DashboardLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/CredApp/src/components/common/DashboardLoader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardLoader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CredApp/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$LinearProgress$2f$LinearProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LinearProgress$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/material/esm/LinearProgress/LinearProgress.js [app-client] (ecmascript) <export default as LinearProgress>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
'use client';
;
;
function DashboardLoader(param) {
    let { title = "Loading...", message = "Please wait while we fetch your data" } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        sx: {
            p: {
                xs: 2,
                sm: 3,
                md: 4
            },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '200px',
            gap: 2
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$LinearProgress$2f$LinearProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LinearProgress$3e$__["LinearProgress"], {
                sx: {
                    width: '100%',
                    maxWidth: 400,
                    height: 6,
                    borderRadius: 3,
                    backgroundColor: 'rgba(0, 0, 0, 0.1)',
                    '& .MuiLinearProgress-bar': {
                        borderRadius: 3,
                        background: 'linear-gradient(90deg, #3b82f6, #1d4ed8, #1e40af)'
                    }
                }
            }, void 0, false, {
                fileName: "[project]/CredApp/src/components/common/DashboardLoader.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                variant: "h6",
                sx: {
                    color: '#6b7280',
                    fontWeight: 500,
                    textAlign: 'center',
                    fontSize: {
                        xs: '1rem',
                        sm: '1.125rem'
                    }
                },
                children: title
            }, void 0, false, {
                fileName: "[project]/CredApp/src/components/common/DashboardLoader.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                variant: "body2",
                sx: {
                    color: '#9ca3af',
                    textAlign: 'center',
                    fontSize: {
                        xs: '0.875rem',
                        sm: '0.9rem'
                    }
                },
                children: message
            }, void 0, false, {
                fileName: "[project]/CredApp/src/components/common/DashboardLoader.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/CredApp/src/components/common/DashboardLoader.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_c = DashboardLoader;
var _c;
__turbopack_context__.k.register(_c, "DashboardLoader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LearnerDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CredApp/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CredApp/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$src$2f$components$2f$common$2f$DashboardLoader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CredApp/src/components/common/DashboardLoader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/material/esm/Card/Card.js [app-client] (ecmascript) <export default as Card>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/material/esm/Button/Button.js [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$LinearProgress$2f$LinearProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LinearProgress$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/material/esm/LinearProgress/LinearProgress.js [app-client] (ecmascript) <export default as LinearProgress>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/material/esm/IconButton/IconButton.js [app-client] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/material/esm/TextField/TextField.js [app-client] (ecmascript) <export default as TextField>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$InputAdornment$2f$InputAdornment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InputAdornment$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/material/esm/InputAdornment/InputAdornment.js [app-client] (ecmascript) <export default as InputAdornment>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$Chip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Chip$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/material/esm/Chip/Chip.js [app-client] (ecmascript) <export default as Chip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Menu$2f$Menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/material/esm/Menu/Menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/material/esm/MenuItem/MenuItem.js [app-client] (ecmascript) <export default as MenuItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Select$2f$Select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/material/esm/Select/Select.js [app-client] (ecmascript) <export default as Select>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$FormControl$2f$FormControl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormControl$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/material/esm/FormControl/FormControl.js [app-client] (ecmascript) <export default as FormControl>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$InputLabel$2f$InputLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InputLabel$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/material/esm/InputLabel/InputLabel.js [app-client] (ecmascript) <export default as InputLabel>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/material/esm/Dialog/Dialog.js [app-client] (ecmascript) <export default as Dialog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogTitle$2f$DialogTitle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogTitle$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/material/esm/DialogTitle/DialogTitle.js [app-client] (ecmascript) <export default as DialogTitle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogContent$2f$DialogContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/material/esm/DialogContent/DialogContent.js [app-client] (ecmascript) <export default as DialogContent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogActions$2f$DialogActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogActions$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/material/esm/DialogActions/DialogActions.js [app-client] (ecmascript) <export default as DialogActions>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Pagination$2f$Pagination$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/material/esm/Pagination/Pagination.js [app-client] (ecmascript) <export default as Pagination>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$School$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/icons-material/esm/School.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Verified$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/icons-material/esm/Verified.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Timeline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/icons-material/esm/Timeline.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$MoreVert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/icons-material/esm/MoreVert.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/icons-material/esm/Search.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ViewModule$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/icons-material/esm/ViewModule.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ViewList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/icons-material/esm/ViewList.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$EmojiEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/icons-material/esm/EmojiEvents.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$PeopleOutline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/icons-material/esm/PeopleOutline.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ArrowForward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/icons-material/esm/ArrowForward.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Close$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/icons-material/esm/Close.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CredApp/node_modules/@mui/icons-material/esm/Download.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$src$2f$services$2f$learner$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CredApp/src/services/learner.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CredApp/node_modules/react-chartjs-2/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/CredApp/node_modules/chart.js/dist/chart.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
// Register Chart.js components
__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Chart"].register(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CategoryScale"], __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LinearScale"], __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PointElement"], __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LineElement"], __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Title"], __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Tooltip"], __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Legend"], __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Filler"], __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcElement"]);
// --- STATS placeholders; values computed from API ---
const baseStats = [
    {
        label: 'Total Credentials',
        key: 'total',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$School$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            sx: {
                fontSize: 28
            }
        }, void 0, false, {
            fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
            lineNumber: 74,
            columnNumber: 53
        }, ("TURBOPACK compile-time value", void 0)),
        bgColor: '#e8eaf6',
        iconColor: '#5c6bc0',
        note: 'from your account'
    },
    {
        label: 'Verified',
        key: 'verified',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Verified$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            sx: {
                fontSize: 28
            }
        }, void 0, false, {
            fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
            lineNumber: 75,
            columnNumber: 47
        }, ("TURBOPACK compile-time value", void 0)),
        bgColor: '#e8f5e9',
        iconColor: '#66bb6a',
        note: 'credentials'
    },
    {
        label: 'Pending',
        key: 'pending',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Timeline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            sx: {
                fontSize: 28
            }
        }, void 0, false, {
            fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
            lineNumber: 76,
            columnNumber: 45
        }, ("TURBOPACK compile-time value", void 0)),
        bgColor: '#fff3e0',
        iconColor: '#ffa726',
        note: 'under review'
    }
];
const categories = [
    {
        label: 'All',
        color: '#fbbf24',
        active: true
    },
    {
        label: 'Academic',
        color: '#a78bfa'
    },
    {
        label: 'Technical',
        color: '#f87171'
    },
    {
        label: 'Co-Curricular',
        color: '#4ade80'
    },
    {
        label: 'Performing Arts',
        color: '#60a5fa'
    },
    {
        label: 'Others',
        color: '#94a3b8'
    }
];
// Profile impressions data
const impressionsData = [
    {
        time: "0:00",
        impressions: 160
    },
    {
        time: "2:00",
        impressions: 140
    },
    {
        time: "4:00",
        impressions: 180
    },
    {
        time: "6:00",
        impressions: 120
    },
    {
        time: "8:00",
        impressions: 115
    },
    {
        time: "10:00",
        impressions: 140
    },
    {
        time: "12:00",
        impressions: 100
    },
    {
        time: "14:00",
        impressions: 110
    },
    {
        time: "16:00",
        impressions: 90
    }
];
// --- LINE CHART COMPONENT using Chart.js ---
const LineChart = ()=>{
    const chartData = {
        labels: impressionsData.map((d)=>d.time),
        datasets: [
            {
                label: 'Profile Impressions',
                data: impressionsData.map((d)=>d.impressions),
                fill: true,
                backgroundColor: (context)=>{
                    const ctx = context.chart.ctx;
                    const gradient = ctx.createLinearGradient(0, 0, 0, 240);
                    gradient.addColorStop(0, 'rgba(124, 77, 255, 0.15)');
                    gradient.addColorStop(1, 'rgba(124, 77, 255, 0)');
                    return gradient;
                },
                borderColor: '#7c4dff',
                borderWidth: 3,
                tension: 0.4,
                pointRadius: 5,
                pointBackgroundColor: '#7c4dff',
                pointBorderColor: '#ffffff',
                pointBorderWidth: 2,
                pointHoverRadius: 7,
                pointHoverBackgroundColor: '#7c4dff',
                pointHoverBorderColor: '#ffffff',
                pointHoverBorderWidth: 3
            }
        ]
    };
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                padding: 12,
                titleColor: '#ffffff',
                bodyColor: '#ffffff',
                borderColor: '#7c4dff',
                borderWidth: 1,
                displayColors: false,
                callbacks: {
                    label: function(context) {
                        return "Impressions: ".concat(context.parsed.y);
                    }
                }
            }
        },
        scales: {
            x: {
                grid: {
                    display: true,
                    color: 'rgba(0, 0, 0, 0.05)'
                },
                ticks: {
                    color: '#64748b',
                    font: {
                        size: 11
                    }
                }
            },
            y: {
                beginAtZero: true,
                grid: {
                    display: true,
                    color: 'rgba(0, 0, 0, 0.05)'
                },
                ticks: {
                    color: '#64748b',
                    font: {
                        size: 11
                    }
                }
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        sx: {
            position: 'relative',
            height: 240,
            mt: 3
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
            data: chartData,
            options: options
        }, void 0, false, {
            fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
            lineNumber: 185,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
        lineNumber: 184,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = LineChart;
// --- DONUT CHART COMPONENT using Chart.js ---
const DonutChart = ()=>{
    const chartData = {
        labels: [
            "Co-curricular",
            "Performing Arts",
            "Other",
            "Academics",
            "Technical"
        ],
        datasets: [
            {
                label: "Certificates",
                data: [
                    15,
                    12,
                    8,
                    10,
                    3
                ],
                backgroundColor: [
                    "#8b5cf6",
                    "#ec4899",
                    "#06b6d4",
                    "#f59e0b",
                    "#10b981"
                ],
                borderColor: "#ffffff",
                borderWidth: 3,
                hoverOffset: 10,
                hoverBorderWidth: 4
            }
        ]
    };
    const options = {
        responsive: true,
        maintainAspectRatio: true,
        cutout: '70%',
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                padding: 12,
                titleColor: '#ffffff',
                bodyColor: '#ffffff',
                borderColor: '#7c4dff',
                borderWidth: 1,
                displayColors: true,
                callbacks: {
                    label: function(context) {
                        const label = context.label || '';
                        const value = context.parsed || 0;
                        const total = context.dataset.data.reduce((a, b)=>a + b, 0);
                        const percentage = (value / total * 100).toFixed(1);
                        return "".concat(label, ": ").concat(value, " (").concat(percentage, "%)");
                    }
                }
            }
        }
    };
    const totalCertificates = chartData.datasets[0].data.reduce((a, b)=>a + b, 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        sx: {
            position: 'relative',
            width: 200,
            height: 200,
            mx: 'auto',
            my: 2
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Doughnut"], {
                data: chartData,
                options: options
            }, void 0, false, {
                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                lineNumber: 252,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: {
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                    pointerEvents: 'none'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                        variant: "h3",
                        fontWeight: 700,
                        color: "#1e293b",
                        children: totalCertificates
                    }, void 0, false, {
                        fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                        lineNumber: 254,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                        variant: "caption",
                        color: "text.secondary",
                        children: "In total"
                    }, void 0, false, {
                        fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                        lineNumber: 255,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                lineNumber: 253,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
        lineNumber: 251,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = DonutChart;
const BarChart = ()=>{
    const data = [
        {
            label: 'Python',
            value: 50,
            color: '#a5b4fc'
        },
        {
            label: 'Frontend',
            value: 78,
            color: '#7c4dff'
        },
        {
            label: 'Java',
            value: 95,
            color: '#1e293b'
        },
        {
            label: 'AI/ML',
            value: 70,
            color: '#7c4dff'
        },
        {
            label: 'Android',
            value: 48,
            color: '#a5b4fc'
        },
        {
            label: 'Other',
            value: 65,
            color: '#86efac'
        }
    ];
    const maxValue = 100;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        sx: {
            height: 200,
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'flex-end',
            gap: 1.5,
            mt: 3,
            px: 2
        },
        children: data.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    height: '100%',
                    justifyContent: 'flex-end',
                    flex: 1
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: {
                            width: '100%',
                            maxWidth: 45,
                            height: "".concat(item.value / maxValue * 100, "%"),
                            bgcolor: item.color,
                            borderRadius: '6px 6px 0 0'
                        }
                    }, void 0, false, {
                        fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                        lineNumber: 276,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                        variant: "caption",
                        mt: 1,
                        color: "text.secondary",
                        fontSize: "0.7rem",
                        children: item.label
                    }, void 0, false, {
                        fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                        lineNumber: 277,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, item.label, true, {
                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                lineNumber: 275,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
        lineNumber: 273,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c2 = BarChart;
const CredentialCard = (param)=>{
    let { credential, onViewDetails, onDownload } = param;
    const verified = (credential.status || '').toLowerCase() === 'verified';
    const issuedDate = credential.issued_date ? new Date(credential.issued_date).toLocaleDateString() : '-';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
        sx: {
            p: {
                xs: 2,
                sm: 3
            },
            borderRadius: 2,
            bgcolor: '#fafbfc',
            boxShadow: 'none',
            border: '1px solid #e5e7eb',
            transition: 'all 0.2s',
            '&:hover': {
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                transform: 'translateY(-2px)'
            },
            height: 'fit-content'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: {
                    display: 'flex',
                    flexDirection: {
                        xs: 'column',
                        sm: 'row'
                    },
                    justifyContent: 'space-between',
                    alignItems: {
                        xs: 'flex-start',
                        sm: 'flex-start'
                    },
                    mb: 2,
                    gap: {
                        xs: 2,
                        sm: 0
                    }
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: {
                            flex: 1,
                            minWidth: 0
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                variant: "h6",
                                fontWeight: 700,
                                color: "#1e293b",
                                mb: 1.5,
                                sx: {
                                    fontSize: {
                                        xs: '1rem',
                                        sm: '1.125rem'
                                    },
                                    lineHeight: 1.3,
                                    wordBreak: 'break-word'
                                },
                                children: credential.credential_title || '-'
                            }, void 0, false, {
                                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                lineNumber: 317,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                variant: "body2",
                                color: "text.secondary",
                                mb: 0.5,
                                sx: {
                                    fontSize: {
                                        xs: '0.75rem',
                                        sm: '0.875rem'
                                    }
                                },
                                children: [
                                    "Issuer: ",
                                    credential.issuer_name || '-'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                lineNumber: 324,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            credential.nsqf_level !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                variant: "body2",
                                color: "text.secondary",
                                mb: 0.5,
                                sx: {
                                    fontSize: {
                                        xs: '0.75rem',
                                        sm: '0.875rem'
                                    }
                                },
                                children: [
                                    "NSQF Level: ",
                                    credential.nsqf_level
                                ]
                            }, void 0, true, {
                                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                lineNumber: 328,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                variant: "body2",
                                color: "text.secondary",
                                mb: 2,
                                sx: {
                                    fontSize: {
                                        xs: '0.75rem',
                                        sm: '0.875rem'
                                    }
                                },
                                children: [
                                    "Issued Date: ",
                                    issuedDate
                                ]
                            }, void 0, true, {
                                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                lineNumber: 332,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                sx: {
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: 1,
                                    mb: 2
                                },
                                children: (credential.skill_tags || []).slice(0, 3).map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$Chip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Chip$3e$__["Chip"], {
                                        label: t,
                                        size: "small",
                                        sx: {
                                            bgcolor: '#eef2ff',
                                            color: '#4338ca',
                                            fontSize: {
                                                xs: '0.7rem',
                                                sm: '0.75rem'
                                            },
                                            height: {
                                                xs: 20,
                                                sm: 24
                                            }
                                        }
                                    }, t, false, {
                                        fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                        lineNumber: 338,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                lineNumber: 336,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                        lineNumber: 316,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: {
                            flexShrink: 0,
                            ml: {
                                xs: 0,
                                sm: 2
                            },
                            alignSelf: {
                                xs: 'center',
                                sm: 'flex-start'
                            }
                        },
                        children: credential.qr_code_image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            component: "img",
                            src: "data:image/png;base64,".concat(credential.qr_code_image),
                            alt: "QR Code",
                            sx: {
                                width: {
                                    xs: 48,
                                    sm: 64
                                },
                                height: {
                                    xs: 48,
                                    sm: 64
                                },
                                borderRadius: 1,
                                border: '1px solid #e5e7eb',
                                cursor: 'pointer'
                            },
                            onClick: ()=>onViewDetails(credential)
                        }, void 0, false, {
                            fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                            lineNumber: 360,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            sx: {
                                width: {
                                    xs: 48,
                                    sm: 64
                                },
                                height: {
                                    xs: 48,
                                    sm: 64
                                },
                                borderRadius: '50%',
                                bgcolor: '#ede9fe',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$EmojiEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                sx: {
                                    fontSize: {
                                        xs: 28,
                                        sm: 36
                                    },
                                    color: '#7c4dff'
                                }
                            }, void 0, false, {
                                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                lineNumber: 383,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                            lineNumber: 374,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                        lineNumber: 354,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                lineNumber: 308,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            verified && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                    mb: 2
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Verified$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        sx: {
                            fontSize: {
                                xs: 16,
                                sm: 18
                            },
                            color: '#26c6da'
                        }
                    }, void 0, false, {
                        fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                        lineNumber: 391,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                        variant: "body2",
                        color: "#26c6da",
                        fontWeight: 600,
                        sx: {
                            fontSize: {
                                xs: '0.75rem',
                                sm: '0.875rem'
                            }
                        },
                        children: "Verified"
                    }, void 0, false, {
                        fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                        lineNumber: 392,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                lineNumber: 390,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: {
                    display: 'flex',
                    flexDirection: {
                        xs: 'column',
                        sm: 'row'
                    },
                    gap: {
                        xs: 1,
                        sm: 2
                    },
                    alignItems: {
                        xs: 'stretch',
                        sm: 'center'
                    }
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                        variant: "text",
                        size: "small",
                        onClick: ()=>onViewDetails(credential),
                        sx: {
                            color: '#7c4dff',
                            textTransform: 'none',
                            fontWeight: 600,
                            p: 0,
                            minWidth: 'auto',
                            fontSize: {
                                xs: '0.75rem',
                                sm: '0.875rem'
                            },
                            justifyContent: {
                                xs: 'center',
                                sm: 'flex-start'
                            }
                        },
                        children: "View Details"
                    }, void 0, false, {
                        fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                        lineNumber: 404,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                        variant: "text",
                        size: "small",
                        onClick: ()=>onDownload(credential),
                        sx: {
                            color: '#64748b',
                            textTransform: 'none',
                            p: 0,
                            minWidth: 'auto',
                            fontSize: {
                                xs: '0.75rem',
                                sm: '0.875rem'
                            },
                            justifyContent: {
                                xs: 'center',
                                sm: 'flex-start'
                            }
                        },
                        children: "Download"
                    }, void 0, false, {
                        fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                        lineNumber: 420,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                lineNumber: 398,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
        lineNumber: 298,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c3 = CredentialCard;
const CredentialListCard = (param)=>{
    let { credential, onViewDetails, onDownload } = param;
    const issuedDate = credential.issued_date ? new Date(credential.issued_date).toLocaleDateString() : '-';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
        sx: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderRadius: 2,
            p: 1.5,
            boxShadow: 1,
            border: '1px solid #e5e7eb',
            mb: 1,
            transition: 'all 0.25s ease',
            '&:hover': {
                boxShadow: 2,
                transform: 'translateY(-1px)'
            }
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 0.4,
                    flex: 1
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                        variant: "subtitle2",
                        fontWeight: 700,
                        color: "#1e293b",
                        sx: {
                            fontSize: '0.95rem'
                        },
                        children: credential.credential_title || 'Certificate'
                    }, void 0, false, {
                        fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                        lineNumber: 467,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                        variant: "caption",
                        color: "text.secondary",
                        sx: {
                            fontSize: '0.8rem'
                        },
                        children: [
                            "Issuer: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: credential.issuer_name || '-'
                            }, void 0, false, {
                                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                lineNumber: 472,
                                columnNumber: 19
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                        lineNumber: 471,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    credential.nsqf_level !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                        variant: "caption",
                        color: "text.secondary",
                        sx: {
                            fontSize: '0.8rem'
                        },
                        children: [
                            "NSQF Level: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: credential.nsqf_level
                            }, void 0, false, {
                                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                lineNumber: 477,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                        lineNumber: 476,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                        variant: "caption",
                        color: "text.secondary",
                        sx: {
                            fontSize: '0.8rem'
                        },
                        children: [
                            "Issued Date: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: issuedDate
                            }, void 0, false, {
                                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                lineNumber: 482,
                                columnNumber: 24
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                        lineNumber: 481,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: {
                            display: 'flex',
                            gap: 2,
                            mt: 0.5
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                size: "small",
                                onClick: ()=>onViewDetails(credential),
                                sx: {
                                    color: '#7c4dff',
                                    textTransform: 'none',
                                    fontWeight: 600,
                                    p: 0,
                                    minWidth: 'auto',
                                    fontSize: '0.75rem',
                                    '&:hover': {
                                        textDecoration: 'underline'
                                    }
                                },
                                children: "View Details"
                            }, void 0, false, {
                                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                lineNumber: 487,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                size: "small",
                                onClick: ()=>onDownload(credential),
                                sx: {
                                    color: '#64748b',
                                    textTransform: 'none',
                                    fontWeight: 600,
                                    p: 0,
                                    minWidth: 'auto',
                                    fontSize: '0.75rem',
                                    '&:hover': {
                                        textDecoration: 'underline'
                                    }
                                },
                                children: "Download"
                            }, void 0, false, {
                                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                lineNumber: 503,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                        lineNumber: 486,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                lineNumber: 466,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: {
                    flexShrink: 0,
                    ml: 2,
                    width: 70,
                    height: 70,
                    borderRadius: 1.5,
                    overflow: 'hidden',
                    border: '1px solid #e5e7eb',
                    bgcolor: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                },
                onClick: ()=>onViewDetails(credential),
                children: credential.qr_code_image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                    component: "img",
                    src: "data:image/png;base64,".concat(credential.qr_code_image),
                    alt: "QR Code",
                    sx: {
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }
                }, void 0, false, {
                    fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                    lineNumber: 540,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$EmojiEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    sx: {
                        fontSize: 28,
                        color: '#7c4dff'
                    }
                }, void 0, false, {
                    fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                    lineNumber: 551,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                lineNumber: 522,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
        lineNumber: 451,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c4 = CredentialListCard;
const ViewDetailsModal = (param)=>{
    let { credential, open, onClose, onDownload } = param;
    if (!credential) return null;
    const issuedDate = credential.issued_date ? new Date(credential.issued_date).toLocaleDateString() : '-';
    const completionDate = credential.completion_date ? new Date(credential.completion_date).toLocaleDateString() : '-';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__["Dialog"], {
        open: open,
        onClose: onClose,
        maxWidth: "lg",
        fullWidth: true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogTitle$2f$DialogTitle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogTitle$3e$__["DialogTitle"], {
                sx: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderBottom: '1px solid #e5e7eb',
                    pb: 2
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                        variant: "h5",
                        component: "span",
                        fontWeight: 700,
                        children: "Credential Details"
                    }, void 0, false, {
                        fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                        lineNumber: 583,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                        onClick: onClose,
                        size: "small",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Close$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                            lineNumber: 588,
                            columnNumber: 7
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                        lineNumber: 587,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                lineNumber: 574,
                columnNumber: 3
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogContent$2f$DialogContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__["DialogContent"], {
                sx: {
                    pt: 3
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: {
                            display: 'grid',
                            gridTemplateColumns: {
                                xs: '1fr',
                                md: '200px 1fr'
                            },
                            gap: 3,
                            mb: 4
                        },
                        children: [
                            credential.qr_code_image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                sx: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                        component: "img",
                                        src: "data:image/png;base64,".concat(credential.qr_code_image),
                                        alt: "QR Code",
                                        sx: {
                                            width: 180,
                                            height: 180,
                                            borderRadius: 2,
                                            border: '2px solid #e5e7eb',
                                            mb: 1
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                        lineNumber: 598,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                        variant: "caption",
                                        color: "text.secondary",
                                        textAlign: "center",
                                        children: "Scan to verify"
                                    }, void 0, false, {
                                        fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                        lineNumber: 604,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                lineNumber: 597,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                sx: {
                                    display: 'grid',
                                    gridTemplateColumns: {
                                        xs: '1fr',
                                        sm: '1fr 1fr'
                                    },
                                    gap: 3
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                        sx: {
                                            bgcolor: '#f8fafc',
                                            p: 2,
                                            borderRadius: 2
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                variant: "caption",
                                                color: "text.secondary",
                                                fontWeight: 600,
                                                children: "Credential Title"
                                            }, void 0, false, {
                                                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                                lineNumber: 613,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                variant: "body1",
                                                fontWeight: 600,
                                                mt: 0.5,
                                                children: credential.credential_title || '-'
                                            }, void 0, false, {
                                                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                                lineNumber: 614,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                        lineNumber: 612,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                        sx: {
                                            bgcolor: '#f8fafc',
                                            p: 2,
                                            borderRadius: 2
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                variant: "caption",
                                                color: "text.secondary",
                                                fontWeight: 600,
                                                children: "Issuer"
                                            }, void 0, false, {
                                                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                                lineNumber: 618,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                variant: "body1",
                                                fontWeight: 600,
                                                mt: 0.5,
                                                children: credential.issuer_name || '-'
                                            }, void 0, false, {
                                                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                                lineNumber: 619,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                        lineNumber: 617,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                        sx: {
                                            bgcolor: '#f8fafc',
                                            p: 2,
                                            borderRadius: 2
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                variant: "caption",
                                                color: "text.secondary",
                                                fontWeight: 600,
                                                children: "Issue Date"
                                            }, void 0, false, {
                                                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                                lineNumber: 623,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                variant: "body2",
                                                mt: 0.5,
                                                children: issuedDate
                                            }, void 0, false, {
                                                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                                lineNumber: 624,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                        lineNumber: 622,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                        sx: {
                                            bgcolor: '#f8fafc',
                                            p: 2,
                                            borderRadius: 2
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                variant: "caption",
                                                color: "text.secondary",
                                                fontWeight: 600,
                                                children: "Completion Date"
                                            }, void 0, false, {
                                                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                                lineNumber: 628,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                variant: "body2",
                                                mt: 0.5,
                                                children: completionDate
                                            }, void 0, false, {
                                                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                                lineNumber: 629,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                        lineNumber: 627,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                        sx: {
                                            bgcolor: '#f8fafc',
                                            p: 2,
                                            borderRadius: 2
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                variant: "caption",
                                                color: "text.secondary",
                                                fontWeight: 600,
                                                children: "NSQF Level"
                                            }, void 0, false, {
                                                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                                lineNumber: 633,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                variant: "body2",
                                                mt: 0.5,
                                                children: credential.nsqf_level || '-'
                                            }, void 0, false, {
                                                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                                lineNumber: 634,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                        lineNumber: 632,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                        sx: {
                                            bgcolor: '#f8fafc',
                                            p: 2,
                                            borderRadius: 2
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                variant: "caption",
                                                color: "text.secondary",
                                                fontWeight: 600,
                                                children: "Type"
                                            }, void 0, false, {
                                                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                                lineNumber: 638,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                variant: "body2",
                                                mt: 0.5,
                                                children: credential.credential_type || '-'
                                            }, void 0, false, {
                                                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                                lineNumber: 639,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                        lineNumber: 637,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                        sx: {
                                            bgcolor: '#f8fafc',
                                            p: 2,
                                            borderRadius: 2
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                variant: "caption",
                                                color: "text.secondary",
                                                fontWeight: 600,
                                                children: "Status"
                                            }, void 0, false, {
                                                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                                lineNumber: 643,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$Chip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Chip$3e$__["Chip"], {
                                                label: credential.status || 'Unknown',
                                                size: "small",
                                                color: credential.status === 'verified' ? 'success' : 'warning',
                                                sx: {
                                                    mt: 0.5
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                                lineNumber: 644,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                        lineNumber: 642,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                        sx: {
                                            bgcolor: '#f8fafc',
                                            p: 2,
                                            borderRadius: 2
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                variant: "caption",
                                                color: "text.secondary",
                                                fontWeight: 600,
                                                children: "Blockchain Status"
                                            }, void 0, false, {
                                                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                                lineNumber: 653,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$Chip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Chip$3e$__["Chip"], {
                                                label: credential.blockchain_status || 'Unknown',
                                                size: "small",
                                                color: credential.blockchain_status === 'confirmed' ? 'success' : 'default',
                                                sx: {
                                                    mt: 0.5
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                                lineNumber: 654,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                        lineNumber: 652,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                lineNumber: 611,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                        lineNumber: 594,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    credential.credential_hash && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: {
                            bgcolor: '#fef3c7',
                            p: 3,
                            borderRadius: 2,
                            mb: 3,
                            border: '1px solid #fde047'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                variant: "caption",
                                color: "text.secondary",
                                fontWeight: 600,
                                children: "Credential Hash"
                            }, void 0, false, {
                                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                lineNumber: 667,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                variant: "body2",
                                sx: {
                                    fontFamily: 'monospace',
                                    fontSize: '0.75rem',
                                    wordBreak: 'break-all',
                                    mt: 1
                                },
                                children: credential.credential_hash
                            }, void 0, false, {
                                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                lineNumber: 668,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                        lineNumber: 666,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    credential.skill_tags && credential.skill_tags.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: {
                            mb: 3
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                variant: "subtitle2",
                                fontWeight: 600,
                                mb: 1.5,
                                children: "Skills Certified"
                            }, void 0, false, {
                                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                lineNumber: 677,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                sx: {
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: 1
                                },
                                children: credential.skill_tags.map((skill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$Chip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Chip$3e$__["Chip"], {
                                        label: skill,
                                        size: "medium",
                                        sx: {
                                            bgcolor: '#eef2ff',
                                            color: '#4338ca',
                                            fontWeight: 500
                                        }
                                    }, skill, false, {
                                        fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                        lineNumber: 680,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                lineNumber: 678,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                        lineNumber: 676,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    credential.tags && credential.tags.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                variant: "subtitle2",
                                fontWeight: 600,
                                mb: 1.5,
                                children: "Tags"
                            }, void 0, false, {
                                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                lineNumber: 689,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                sx: {
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: 1
                                },
                                children: credential.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$Chip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Chip$3e$__["Chip"], {
                                        label: tag,
                                        size: "medium",
                                        sx: {
                                            bgcolor: '#ecfeff',
                                            color: '#0e7490',
                                            fontWeight: 500
                                        }
                                    }, tag, false, {
                                        fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                        lineNumber: 692,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                lineNumber: 690,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                        lineNumber: 688,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                lineNumber: 593,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogActions$2f$DialogActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogActions$3e$__["DialogActions"], {
                sx: {
                    borderTop: '1px solid #e5e7eb',
                    p: 3,
                    gap: 2
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                        onClick: onClose,
                        sx: {
                            textTransform: 'none',
                            color: '#64748b'
                        },
                        children: "Close"
                    }, void 0, false, {
                        fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                        lineNumber: 700,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                        variant: "contained",
                        startIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                            lineNumber: 705,
                            columnNumber: 22
                        }, void 0),
                        onClick: ()=>onDownload(credential),
                        sx: {
                            textTransform: 'none',
                            bgcolor: '#7c4dff',
                            '&:hover': {
                                bgcolor: '#6a3de8'
                            }
                        },
                        children: "Download Certificate"
                    }, void 0, false, {
                        fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                        lineNumber: 703,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                lineNumber: 699,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
        lineNumber: 573,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c5 = ViewDetailsModal;
function LearnerDashboard() {
    _s();
    const [credentials, setCredentials] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [totalCredentials, setTotalCredentials] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedCredential, setSelectedCredential] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [viewDetailsOpen, setViewDetailsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Filter states
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [issuer, setIssuer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [nsqfLevel, setNsqfLevel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [sortBy, setSortBy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('issued_date_desc');
    // Pagination states
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [limit, setLimit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(9);
    // view mode: 'grid' or 'list'
    const [viewMode, setViewMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('grid');
    const skip = (page - 1) * limit;
    const totalPages = Math.ceil(totalCredentials / limit);
    const total = credentials.length;
    const verifiedCount = credentials.filter((c)=>(c.status || '').toLowerCase() === 'verified').length;
    const pendingCount = Math.max(total - verifiedCount, 0);
    // top skills calculation (from skill_tags)
    const topSkills = __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "LearnerDashboard.useMemo[topSkills]": ()=>{
            const freq = {};
            credentials.forEach({
                "LearnerDashboard.useMemo[topSkills]": (c)=>(c.skill_tags || []).forEach({
                        "LearnerDashboard.useMemo[topSkills]": (t)=>{
                            freq[t] = (freq[t] || 0) + 1;
                        }
                    }["LearnerDashboard.useMemo[topSkills]"])
            }["LearnerDashboard.useMemo[topSkills]"]);
            return Object.entries(freq).sort({
                "LearnerDashboard.useMemo[topSkills]": (a, b)=>b[1] - a[1]
            }["LearnerDashboard.useMemo[topSkills]"]).slice(0, 6);
        }
    }["LearnerDashboard.useMemo[topSkills]"], [
        credentials
    ]);
    const credentialsGridTemplate = viewMode === 'grid' ? {
        xs: '1fr',
        sm: 'repeat(2, 1fr)',
        lg: 'repeat(3, 1fr)'
    } : '1fr';
    const load = (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LearnerDashboard.useCallback[load]": async ()=>{
            try {
                setIsLoading(true);
                setError(null);
                const params = {
                    skip,
                    limit
                };
                if (status) params.status = status;
                if (issuer) params.issuer = issuer;
                if (nsqfLevel) params.nsqf_level = nsqfLevel;
                const data = await __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$src$2f$services$2f$learner$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getLearnerCredentials(params);
                let items = data.credentials || [];
                // Client-side search filter
                if (query.trim()) {
                    const q = query.toLowerCase();
                    items = items.filter({
                        "LearnerDashboard.useCallback[load]": (c)=>(c.credential_title || '').toLowerCase().includes(q) || (c.issuer_name || '').toLowerCase().includes(q) || (c.skill_tags || []).some({
                                "LearnerDashboard.useCallback[load]": (t)=>t.toLowerCase().includes(q)
                            }["LearnerDashboard.useCallback[load]"]) || (c.tags || []).some({
                                "LearnerDashboard.useCallback[load]": (t)=>t.toLowerCase().includes(q)
                            }["LearnerDashboard.useCallback[load]"])
                    }["LearnerDashboard.useCallback[load]"]);
                }
                // Sort by issued_date
                items.sort({
                    "LearnerDashboard.useCallback[load]": (a, b)=>{
                        const da = a.issued_date ? new Date(a.issued_date).getTime() : 0;
                        const db = b.issued_date ? new Date(b.issued_date).getTime() : 0;
                        return sortBy === 'issued_date_desc' ? db - da : da - db;
                    }
                }["LearnerDashboard.useCallback[load]"]);
                setCredentials(items);
                setTotalCredentials(data.total || items.length);
            } catch (e) {
                var _e_response_data, _e_response, _e_response_data1, _e_response1;
                setError((e === null || e === void 0 ? void 0 : (_e_response = e.response) === null || _e_response === void 0 ? void 0 : (_e_response_data = _e_response.data) === null || _e_response_data === void 0 ? void 0 : _e_response_data.detail) || (e === null || e === void 0 ? void 0 : (_e_response1 = e.response) === null || _e_response1 === void 0 ? void 0 : (_e_response_data1 = _e_response1.data) === null || _e_response_data1 === void 0 ? void 0 : _e_response_data1.message) || (e === null || e === void 0 ? void 0 : e.message) || 'Failed to load credentials');
            } finally{
                setIsLoading(false);
            }
        }
    }["LearnerDashboard.useCallback[load]"], [
        status,
        issuer,
        nsqfLevel,
        query,
        sortBy,
        skip,
        limit
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LearnerDashboard.useEffect": ()=>{
            load();
        }
    }["LearnerDashboard.useEffect"], [
        load
    ]);
    const handleViewDetails = (credential)=>{
        setSelectedCredential(credential);
        setViewDetailsOpen(true);
    };
    const handleDownload = async (credential)=>{
        try {
            // TODO: Implement actual download functionality
            console.log('Download credential:', credential._id);
            alert('Download functionality will be implemented with PDF generation');
        } catch (error) {
            console.error('Download error:', error);
        }
    };
    const handlePageChange = (_event, value)=>{
        setPage(value);
    };
    const handleFilterChange = ()=>{
        setPage(1); // Reset to first page when filters change
    };
    // Menu (three-dots) state & actions
    const [menuAnchorEl, setMenuAnchorEl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const isMenuOpen = Boolean(menuAnchorEl);
    const handleMenuOpen = (e)=>setMenuAnchorEl(e.currentTarget);
    const handleMenuClose = ()=>setMenuAnchorEl(null);
    const exportCsv = ()=>{
        if (!credentials || credentials.length === 0) {
            alert('No credentials to export');
            handleMenuClose();
            return;
        }
        const headers = [
            'Title',
            'Issuer',
            'Issue Date',
            'Completion Date',
            'NSQF Level',
            'Status',
            'Tags',
            'Skill Tags'
        ];
        const rows = credentials.map((c)=>{
            var _c_nsqf_level;
            return [
                (c.credential_title || '').replace(/"/g, '""'),
                (c.issuer_name || '').replace(/"/g, '""'),
                c.issued_date || '',
                c.completion_date || '',
                (_c_nsqf_level = c.nsqf_level) !== null && _c_nsqf_level !== void 0 ? _c_nsqf_level : '',
                c.status || '',
                (c.tags || []).join(';'),
                (c.skill_tags || []).join(';')
            ];
        });
        const csvContent = [
            headers,
            ...rows
        ].map((r)=>r.map((cell)=>'"'.concat(cell, '"')).join(',')).join('\n');
        const blob = new Blob([
            csvContent
        ], {
            type: 'text/csv;charset=utf-8;'
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'credentials_export.csv';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        handleMenuClose();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        sx: {
            px: {
                xs: 1,
                sm: 2,
                md: 4
            },
            py: {
                xs: 2,
                sm: 3,
                md: 4
            },
            bgcolor: '#fafbfc',
            minHeight: '100vh'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: {
                    display: 'flex',
                    flexDirection: {
                        xs: 'column',
                        sm: 'row'
                    },
                    justifyContent: 'space-between',
                    alignItems: {
                        xs: 'flex-start',
                        sm: 'center'
                    },
                    mb: {
                        xs: 3,
                        sm: 4
                    },
                    gap: {
                        xs: 2,
                        sm: 0
                    }
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                        variant: "h4",
                        sx: {
                            fontWeight: 700,
                            color: '#1e293b',
                            fontSize: {
                                xs: '1.5rem',
                                sm: '1.75rem',
                                md: '2rem'
                            }
                        },
                        children: "Dashboard Overview"
                    }, void 0, false, {
                        fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                        lineNumber: 876,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2,
                            flexDirection: {
                                xs: 'row',
                                sm: 'row'
                            },
                            width: {
                                xs: '100%',
                                sm: 'auto'
                            },
                            justifyContent: {
                                xs: 'space-between',
                                sm: 'flex-end'
                            }
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                variant: "body2",
                                color: "text.secondary",
                                sx: {
                                    fontSize: {
                                        xs: '0.875rem',
                                        sm: '0.875rem'
                                    }
                                },
                                children: "Today"
                            }, void 0, false, {
                                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                lineNumber: 891,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                variant: "contained",
                                sx: {
                                    bgcolor: '#7c4dff',
                                    textTransform: 'none',
                                    borderRadius: 2,
                                    px: {
                                        xs: 2,
                                        sm: 3
                                    },
                                    py: {
                                        xs: 1,
                                        sm: 1.5
                                    },
                                    fontSize: {
                                        xs: '0.875rem',
                                        sm: '0.875rem'
                                    },
                                    '&:hover': {
                                        bgcolor: '#6a3de8'
                                    }
                                },
                                children: "Learner"
                            }, void 0, false, {
                                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                lineNumber: 894,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                        lineNumber: 883,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                lineNumber: 868,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
                sx: {
                    p: 2,
                    mb: 2,
                    border: '1px solid #fecaca',
                    bgcolor: '#fef2f2',
                    color: '#991b1b'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                    variant: "body2",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                    lineNumber: 913,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                lineNumber: 912,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: {
                    display: 'grid',
                    gridTemplateColumns: {
                        xs: '1fr',
                        sm: 'repeat(2, 1fr)',
                        md: 'repeat(3, 1fr)',
                        lg: 'repeat(4, 1fr)'
                    },
                    gap: {
                        xs: 2,
                        sm: 2.5
                    },
                    mb: {
                        xs: 3,
                        sm: 3
                    }
                },
                children: [
                    baseStats.map((stat)=>{
                        const value = stat.key === 'total' ? totalCredentials : stat.key === 'verified' ? verifiedCount : pendingCount;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
                            sx: {
                                p: {
                                    xs: 2,
                                    sm: 2.5
                                },
                                borderRadius: 3,
                                bgcolor: stat.bgColor,
                                boxShadow: 'none',
                                minHeight: {
                                    xs: '120px',
                                    sm: '140px'
                                }
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                sx: {
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'flex-start',
                                    height: '100%'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                        sx: {
                                            flex: 1
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                variant: "body2",
                                                color: "text.secondary",
                                                fontWeight: 600,
                                                mb: 1,
                                                sx: {
                                                    fontSize: {
                                                        xs: '0.75rem',
                                                        sm: '0.875rem'
                                                    }
                                                },
                                                children: stat.label
                                            }, void 0, false, {
                                                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                                lineNumber: 946,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                variant: "h3",
                                                fontWeight: 700,
                                                color: "#1e293b",
                                                sx: {
                                                    fontSize: {
                                                        xs: '1.5rem',
                                                        sm: '1.75rem',
                                                        md: '2rem'
                                                    }
                                                },
                                                children: isLoading ? '...' : value
                                            }, void 0, false, {
                                                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                                lineNumber: 949,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                variant: "caption",
                                                color: "text.secondary",
                                                sx: {
                                                    fontSize: {
                                                        xs: '0.7rem',
                                                        sm: '0.75rem'
                                                    }
                                                },
                                                children: stat.note
                                            }, void 0, false, {
                                                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                                lineNumber: 952,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                        lineNumber: 945,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                        sx: {
                                            width: {
                                                xs: 40,
                                                sm: 48
                                            },
                                            height: {
                                                xs: 40,
                                                sm: 48
                                            },
                                            borderRadius: 2,
                                            bgcolor: 'rgba(255,255,255,0.7)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: stat.iconColor,
                                            flexShrink: 0
                                        },
                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cloneElement(stat.icon, {
                                            sx: {
                                                fontSize: {
                                                    xs: 24,
                                                    sm: 28
                                                }
                                            }
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                        lineNumber: 956,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                lineNumber: 939,
                                columnNumber: 15
                            }, this)
                        }, stat.label, false, {
                            fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                            lineNumber: 932,
                            columnNumber: 13
                        }, this);
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
                        sx: {
                            p: {
                                xs: 2,
                                sm: 2.5
                            },
                            borderRadius: 3,
                            bgcolor: '#e3f2fd',
                            boxShadow: 'none',
                            minHeight: {
                                xs: '120px',
                                sm: '140px'
                            }
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                variant: "body2",
                                color: "text.secondary",
                                sx: {
                                    fontWeight: 600,
                                    mb: 1.5,
                                    fontSize: {
                                        xs: '0.75rem',
                                        sm: '0.875rem'
                                    }
                                },
                                children: "NSQF Progress"
                            }, void 0, false, {
                                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                lineNumber: 980,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$LinearProgress$2f$LinearProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LinearProgress$3e$__["LinearProgress"], {
                                variant: "determinate",
                                value: 57,
                                sx: {
                                    height: {
                                        xs: 8,
                                        sm: 10
                                    },
                                    borderRadius: 5,
                                    bgcolor: '#bbdefb',
                                    '& .MuiLinearProgress-bar': {
                                        bgcolor: '#1976d2',
                                        borderRadius: 5
                                    }
                                }
                            }, void 0, false, {
                                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                lineNumber: 983,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                variant: "h6",
                                pt: 1,
                                sx: {
                                    fontWeight: 700,
                                    color: '#1e293b',
                                    textAlign: 'right',
                                    fontSize: {
                                        xs: '1rem',
                                        sm: '1.25rem'
                                    }
                                },
                                children: "Level 4/7"
                            }, void 0, false, {
                                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                lineNumber: 993,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                        lineNumber: 973,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                lineNumber: 918,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: {
                    display: 'flex',
                    flexDirection: {
                        xs: 'column',
                        lg: 'row'
                    },
                    gap: {
                        xs: 2,
                        sm: 3
                    },
                    mb: {
                        xs: 3,
                        sm: 3
                    }
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
                        sx: {
                            flex: {
                                xs: '1 1 100%',
                                lg: '1 1 60%'
                            },
                            p: {
                                xs: 2,
                                sm: 3
                            },
                            borderRadius: 3,
                            bgcolor: '#ffffff',
                            boxShadow: '0 2px 10px rgba(0,0,0,0.08)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                sx: {
                                    display: 'flex',
                                    flexDirection: {
                                        xs: 'column',
                                        sm: 'row'
                                    },
                                    justifyContent: 'space-between',
                                    alignItems: {
                                        xs: 'flex-start',
                                        sm: 'center'
                                    },
                                    mb: 2,
                                    gap: {
                                        xs: 1,
                                        sm: 0
                                    }
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                            variant: "body2",
                                            color: "text.secondary",
                                            mb: 0.5,
                                            sx: {
                                                fontSize: {
                                                    xs: '0.75rem',
                                                    sm: '0.875rem'
                                                }
                                            },
                                            children: "Total number of profile impressions"
                                        }, void 0, false, {
                                            fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                            lineNumber: 1027,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                            sx: {
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 1,
                                                flexWrap: 'wrap'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                    variant: "h3",
                                                    fontWeight: 700,
                                                    color: "#1e293b",
                                                    sx: {
                                                        fontSize: {
                                                            xs: '1.5rem',
                                                            sm: '1.75rem',
                                                            md: '2rem'
                                                        }
                                                    },
                                                    children: "1,235"
                                                }, void 0, false, {
                                                    fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                                    lineNumber: 1031,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$Chip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Chip$3e$__["Chip"], {
                                                    label: "+3.4%",
                                                    size: "small",
                                                    sx: {
                                                        bgcolor: '#dcfce7',
                                                        color: '#16a34a',
                                                        fontWeight: 600,
                                                        height: {
                                                            xs: 20,
                                                            sm: 24
                                                        },
                                                        fontSize: {
                                                            xs: '0.7rem',
                                                            sm: '0.75rem'
                                                        }
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                                    lineNumber: 1034,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                            lineNumber: 1030,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                    lineNumber: 1026,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                lineNumber: 1018,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                sx: {
                                    position: 'relative',
                                    height: {
                                        xs: 200,
                                        sm: 240
                                    },
                                    mt: 3
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LineChart, {}, void 0, false, {
                                    fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                    lineNumber: 1049,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                lineNumber: 1048,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                        lineNumber: 1011,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
                        sx: {
                            flex: {
                                xs: '1 1 100%',
                                lg: '1 1 35%'
                            },
                            p: {
                                xs: 2,
                                sm: 3
                            },
                            borderRadius: 3,
                            bgcolor: '#ffffff',
                            boxShadow: '0 2px 10px rgba(0,0,0,0.08)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                sx: {
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    mb: 2
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                        variant: "h6",
                                        fontWeight: 700,
                                        color: "#1e293b",
                                        sx: {
                                            fontSize: {
                                                xs: '1rem',
                                                sm: '1.25rem'
                                            }
                                        },
                                        children: "Badges"
                                    }, void 0, false, {
                                        fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                        lineNumber: 1066,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                        size: "small",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ArrowForward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            fontSize: "small"
                                        }, void 0, false, {
                                            fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                            lineNumber: 1070,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                        lineNumber: 1069,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                lineNumber: 1060,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                variant: "h2",
                                fontWeight: 700,
                                color: "#1e293b",
                                textAlign: "center",
                                mt: 2,
                                sx: {
                                    fontSize: {
                                        xs: '2rem',
                                        sm: '2.5rem'
                                    }
                                },
                                children: "3"
                            }, void 0, false, {
                                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                lineNumber: 1073,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                sx: {
                                    display: 'flex',
                                    justifyContent: 'center',
                                    gap: {
                                        xs: 2,
                                        sm: 3
                                    },
                                    my: 3,
                                    flexWrap: 'wrap'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                        sx: {
                                            width: {
                                                xs: 48,
                                                sm: 56
                                            },
                                            height: {
                                                xs: 48,
                                                sm: 56
                                            },
                                            borderRadius: '50%',
                                            bgcolor: '#ede9fe',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            border: '3px solid #c4b5fd'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$EmojiEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            sx: {
                                                fontSize: {
                                                    xs: 28,
                                                    sm: 32
                                                },
                                                color: '#8b5cf6'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                            lineNumber: 1093,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                        lineNumber: 1083,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                        sx: {
                                            width: {
                                                xs: 64,
                                                sm: 72
                                            },
                                            height: {
                                                xs: 64,
                                                sm: 72
                                            },
                                            borderRadius: '50%',
                                            bgcolor: '#fef3c7',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            border: '4px solid #fbbf24'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$EmojiEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            sx: {
                                                fontSize: {
                                                    xs: 36,
                                                    sm: 42
                                                },
                                                color: '#f59e0b'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                            lineNumber: 1105,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                        lineNumber: 1095,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                        sx: {
                                            width: {
                                                xs: 48,
                                                sm: 56
                                            },
                                            height: {
                                                xs: 48,
                                                sm: 56
                                            },
                                            borderRadius: '50%',
                                            bgcolor: '#ede9fe',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            border: '3px solid #c4b5fd'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$EmojiEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            sx: {
                                                fontSize: {
                                                    xs: 28,
                                                    sm: 32
                                                },
                                                color: '#8b5cf6'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                            lineNumber: 1117,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                        lineNumber: 1107,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                lineNumber: 1076,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                variant: "caption",
                                color: "text.secondary",
                                display: "block",
                                textAlign: "center",
                                mb: 0.5,
                                sx: {
                                    fontSize: {
                                        xs: '0.7rem',
                                        sm: '0.75rem'
                                    }
                                },
                                children: "Most Recent Badge"
                            }, void 0, false, {
                                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                lineNumber: 1120,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                variant: "body1",
                                fontWeight: 600,
                                sx: {
                                    color: '#1e293b',
                                    textAlign: 'center',
                                    fontSize: {
                                        xs: '0.875rem',
                                        sm: '1rem'
                                    }
                                },
                                children: "Reinforcement Learning"
                            }, void 0, false, {
                                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                lineNumber: 1123,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                        lineNumber: 1053,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                lineNumber: 1005,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: {
                    display: 'flex',
                    flexDirection: {
                        xs: 'column',
                        lg: 'row'
                    },
                    gap: {
                        xs: 2,
                        sm: 3
                    },
                    mb: {
                        xs: 3,
                        sm: 4
                    }
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
                        sx: {
                            flex: 1,
                            p: {
                                xs: 2,
                                sm: 3
                            },
                            borderRadius: 3,
                            bgcolor: '#ffffff',
                            boxShadow: '0 2px 10px rgba(0,0,0,0.08)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                variant: "h6",
                                fontWeight: 700,
                                mb: 1,
                                color: "#1e293b",
                                sx: {
                                    fontSize: {
                                        xs: '1rem',
                                        sm: '1.25rem'
                                    }
                                },
                                children: "Certificate Distribution"
                            }, void 0, false, {
                                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                lineNumber: 1143,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                sx: {
                                    position: 'relative',
                                    width: {
                                        xs: 150,
                                        sm: 200
                                    },
                                    height: {
                                        xs: 150,
                                        sm: 200
                                    },
                                    mx: 'auto',
                                    my: 2
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DonutChart, {}, void 0, false, {
                                    fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                    lineNumber: 1153,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                lineNumber: 1146,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                        lineNumber: 1136,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
                        sx: {
                            flex: 1,
                            p: {
                                xs: 2,
                                sm: 3
                            },
                            borderRadius: 3,
                            bgcolor: '#ffffff',
                            boxShadow: '0 2px 10px rgba(0,0,0,0.08)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                sx: {
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                        variant: "h6",
                                        fontWeight: 700,
                                        color: "#1e293b",
                                        sx: {
                                            fontSize: {
                                                xs: '1rem',
                                                sm: '1.25rem'
                                            }
                                        },
                                        children: "Top Skills"
                                    }, void 0, false, {
                                        fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                        lineNumber: 1169,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                        size: "small",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ArrowForward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            fontSize: "small"
                                        }, void 0, false, {
                                            fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                            lineNumber: 1173,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                        lineNumber: 1172,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                lineNumber: 1164,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                sx: {
                                    display: 'flex',
                                    gap: 1,
                                    flexWrap: 'wrap',
                                    mt: 2
                                },
                                children: topSkills.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                    variant: "body2",
                                    color: "text.secondary",
                                    sx: {
                                        fontSize: {
                                            xs: '0.875rem',
                                            sm: '0.875rem'
                                        }
                                    },
                                    children: "No skills found."
                                }, void 0, false, {
                                    fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                    lineNumber: 1183,
                                    columnNumber: 15
                                }, this) : topSkills.map((param)=>{
                                    let [skill, count] = param;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$Chip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Chip$3e$__["Chip"], {
                                        label: "".concat(skill, " (").concat(count, ")"),
                                        size: "small",
                                        sx: {
                                            fontSize: {
                                                xs: '0.7rem',
                                                sm: '0.75rem'
                                            },
                                            height: {
                                                xs: 24,
                                                sm: 28
                                            }
                                        }
                                    }, skill, false, {
                                        fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                        lineNumber: 1188,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                lineNumber: 1176,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                        lineNumber: 1157,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                lineNumber: 1130,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: {
                            display: 'flex',
                            flexDirection: {
                                xs: 'column',
                                sm: 'row'
                            },
                            justifyContent: 'space-between',
                            alignItems: {
                                xs: 'flex-start',
                                sm: 'center'
                            },
                            mb: {
                                xs: 2,
                                sm: 3
                            },
                            gap: {
                                xs: 2,
                                sm: 0
                            }
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                variant: "h5",
                                fontWeight: 700,
                                color: "#1e293b",
                                sx: {
                                    fontSize: {
                                        xs: '1.25rem',
                                        sm: '1.5rem'
                                    }
                                },
                                children: "My Credentials"
                            }, void 0, false, {
                                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                lineNumber: 1213,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                sx: {
                                    display: 'flex',
                                    gap: 1
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                        size: "small",
                                        onClick: ()=>setViewMode('grid'),
                                        "aria-pressed": viewMode === 'grid',
                                        sx: {
                                            bgcolor: viewMode === 'grid' ? '#eef2ff' : '#f1f5f9'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ViewModule$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            fontSize: "small"
                                        }, void 0, false, {
                                            fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                            lineNumber: 1223,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                        lineNumber: 1217,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                        size: "small",
                                        onClick: ()=>setViewMode('list'),
                                        "aria-pressed": viewMode === 'list',
                                        sx: {
                                            bgcolor: viewMode === 'list' ? '#eef2ff' : undefined
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ViewList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            fontSize: "small"
                                        }, void 0, false, {
                                            fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                            lineNumber: 1231,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                        lineNumber: 1225,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                        size: "small",
                                        onClick: handleMenuOpen,
                                        "aria-haspopup": "true",
                                        "aria-expanded": isMenuOpen ? 'true' : undefined,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$MoreVert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            fontSize: "small"
                                        }, void 0, false, {
                                            fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                            lineNumber: 1234,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                        lineNumber: 1233,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Menu$2f$Menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                        anchorEl: menuAnchorEl,
                                        open: isMenuOpen,
                                        onClose: handleMenuClose,
                                        keepMounted: true,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                                                onClick: exportCsv,
                                                children: "Export CSV"
                                            }, void 0, false, {
                                                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                                lineNumber: 1237,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                                                onClick: ()=>{
                                                    load();
                                                    handleMenuClose();
                                                },
                                                children: "Refresh"
                                            }, void 0, false, {
                                                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                                lineNumber: 1238,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                                                onClick: ()=>{
                                                    alert('Download all not implemented yet');
                                                    handleMenuClose();
                                                },
                                                children: "Download All"
                                            }, void 0, false, {
                                                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                                lineNumber: 1239,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                        lineNumber: 1236,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                lineNumber: 1216,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                        lineNumber: 1205,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: {
                            bgcolor: '#fafbfc',
                            p: {
                                xs: 2,
                                sm: 2.5
                            },
                            borderRadius: 2,
                            mb: {
                                xs: 2,
                                sm: 3
                            },
                            border: '1px solid #e5e7eb'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            sx: {
                                display: 'flex',
                                flexDirection: {
                                    xs: 'column',
                                    lg: 'row'
                                },
                                alignItems: {
                                    xs: 'stretch',
                                    lg: 'center'
                                },
                                gap: {
                                    xs: 2,
                                    lg: 2
                                },
                                mb: {
                                    xs: 2,
                                    lg: 2
                                }
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                    sx: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 1,
                                        justifyContent: {
                                            xs: 'center',
                                            sm: 'flex-start'
                                        }
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$PeopleOutline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            sx: {
                                                color: '#64748b'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                            lineNumber: 1265,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                            variant: "body2",
                                            color: "text.secondary",
                                            fontWeight: 600,
                                            sx: {
                                                fontSize: {
                                                    xs: '0.75rem',
                                                    sm: '0.875rem'
                                                }
                                            },
                                            children: isLoading ? 'Loading...' : "".concat(totalCredentials, " Certificate").concat(totalCredentials === 1 ? '' : 's', " Found")
                                        }, void 0, false, {
                                            fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                            lineNumber: 1266,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                    lineNumber: 1259,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                    sx: {
                                        display: 'flex',
                                        flexDirection: {
                                            xs: 'column',
                                            sm: 'row'
                                        },
                                        gap: {
                                            xs: 2,
                                            sm: 2
                                        },
                                        flex: 1,
                                        alignItems: {
                                            xs: 'stretch',
                                            sm: 'center'
                                        }
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
                                            size: "small",
                                            placeholder: "Search Skills, Tags, Title, Issuer",
                                            value: query,
                                            onChange: (e)=>{
                                                setQuery(e.target.value);
                                                handleFilterChange();
                                            },
                                            InputProps: {
                                                startAdornment: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$InputAdornment$2f$InputAdornment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InputAdornment$3e$__["InputAdornment"], {
                                                    position: "start",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        sx: {
                                                            color: '#94a3b8',
                                                            fontSize: 20
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                                        lineNumber: 1287,
                                                        columnNumber: 23
                                                    }, void 0)
                                                }, void 0, false, {
                                                    fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                                    lineNumber: 1286,
                                                    columnNumber: 21
                                                }, void 0)
                                            },
                                            sx: {
                                                flex: {
                                                    xs: '1 1 100%',
                                                    sm: '1 1 auto'
                                                },
                                                bgcolor: '#ffffff',
                                                '& .MuiOutlinedInput-root': {
                                                    borderRadius: 2
                                                },
                                                minWidth: {
                                                    xs: '100%',
                                                    sm: 280
                                                }
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                            lineNumber: 1279,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                            sx: {
                                                display: 'flex',
                                                flexDirection: {
                                                    xs: 'column',
                                                    sm: 'row'
                                                },
                                                gap: {
                                                    xs: 2,
                                                    sm: 2
                                                },
                                                flex: {
                                                    xs: '1 1 100%',
                                                    sm: '0 0 auto'
                                                }
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$FormControl$2f$FormControl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormControl$3e$__["FormControl"], {
                                                    size: "small",
                                                    sx: {
                                                        minWidth: {
                                                            xs: '100%',
                                                            sm: 160
                                                        }
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$InputLabel$2f$InputLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InputLabel$3e$__["InputLabel"], {
                                                            id: "status-label",
                                                            children: "Status"
                                                        }, void 0, false, {
                                                            fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                                            lineNumber: 1306,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Select$2f$Select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"], {
                                                            labelId: "status-label",
                                                            label: "Status",
                                                            value: status,
                                                            onChange: (e)=>{
                                                                setStatus(e.target.value);
                                                                handleFilterChange();
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                                                                    value: "",
                                                                    children: "All"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                                                    lineNumber: 1313,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                                                                    value: "verified",
                                                                    children: "Verified"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                                                    lineNumber: 1314,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                                                                    value: "pending",
                                                                    children: "Pending"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                                                    lineNumber: 1315,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                                                                    value: "blockchain_pending",
                                                                    children: "Blockchain Pending"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                                                    lineNumber: 1316,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                                            lineNumber: 1307,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                                    lineNumber: 1305,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
                                                    size: "small",
                                                    label: "Issuer",
                                                    value: issuer,
                                                    onChange: (e)=>{
                                                        setIssuer(e.target.value);
                                                        handleFilterChange();
                                                    },
                                                    sx: {
                                                        width: {
                                                            xs: '100%',
                                                            sm: 180
                                                        },
                                                        bgcolor: '#ffffff',
                                                        '& .MuiOutlinedInput-root': {
                                                            borderRadius: 2
                                                        }
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                                    lineNumber: 1320,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
                                                    size: "small",
                                                    label: "NSQF",
                                                    type: "number",
                                                    value: nsqfLevel,
                                                    onChange: (e)=>{
                                                        const v = e.target.value;
                                                        setNsqfLevel(v === '' ? '' : Number(v));
                                                        handleFilterChange();
                                                    },
                                                    sx: {
                                                        width: {
                                                            xs: '100%',
                                                            sm: 100
                                                        },
                                                        bgcolor: '#ffffff',
                                                        '& .MuiOutlinedInput-root': {
                                                            borderRadius: 2
                                                        }
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                                    lineNumber: 1332,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$FormControl$2f$FormControl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormControl$3e$__["FormControl"], {
                                                    size: "small",
                                                    sx: {
                                                        minWidth: {
                                                            xs: '100%',
                                                            sm: 170
                                                        }
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$InputLabel$2f$InputLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InputLabel$3e$__["InputLabel"], {
                                                            id: "sort-label",
                                                            children: "Sort"
                                                        }, void 0, false, {
                                                            fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                                            lineNumber: 1346,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Select$2f$Select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"], {
                                                            labelId: "sort-label",
                                                            label: "Sort",
                                                            value: sortBy,
                                                            onChange: (e)=>setSortBy(e.target.value),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                                                                    value: "issued_date_desc",
                                                                    children: "Newest First"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                                                    lineNumber: 1353,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                                                                    value: "issued_date_asc",
                                                                    children: "Oldest First"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                                                    lineNumber: 1354,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                                            lineNumber: 1347,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                                    lineNumber: 1345,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                            lineNumber: 1299,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                    lineNumber: 1272,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                            lineNumber: 1252,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                        lineNumber: 1245,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: {
                            display: viewMode === 'list' ? 'block' : 'grid',
                            gridTemplateColumns: viewMode === 'list' ? undefined : credentialsGridTemplate,
                            gap: {
                                xs: 2,
                                sm: 3
                            },
                            mb: {
                                xs: 3,
                                sm: 4
                            }
                        },
                        children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            sx: {
                                gridColumn: viewMode === 'list' ? undefined : '1 / -1'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$src$2f$components$2f$common$2f$DashboardLoader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                title: "Loading Credentials",
                                message: "Fetching your certificates and achievements..."
                            }, void 0, false, {
                                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                lineNumber: 1373,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                            lineNumber: 1372,
                            columnNumber: 13
                        }, this) : credentials.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
                            sx: {
                                p: 3,
                                gridColumn: viewMode === 'list' ? undefined : '1 / -1'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                sx: {
                                    fontSize: {
                                        xs: '0.875rem',
                                        sm: '1rem'
                                    }
                                },
                                children: "No credentials found."
                            }, void 0, false, {
                                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                lineNumber: 1380,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                            lineNumber: 1379,
                            columnNumber: 13
                        }, this) : viewMode === 'list' ? credentials.map((cred)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CredentialListCard, {
                                credential: cred,
                                onViewDetails: handleViewDetails,
                                onDownload: handleDownload
                            }, cred._id, false, {
                                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                lineNumber: 1384,
                                columnNumber: 15
                            }, this)) : credentials.map((cred)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CredentialCard, {
                                credential: cred,
                                onViewDetails: handleViewDetails,
                                onDownload: handleDownload
                            }, cred._id, false, {
                                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                lineNumber: 1393,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                        lineNumber: 1363,
                        columnNumber: 9
                    }, this),
                    !isLoading && credentials.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: {
                            display: 'flex',
                            flexDirection: {
                                xs: 'column',
                                sm: 'row'
                            },
                            justifyContent: 'center',
                            alignItems: 'center',
                            mt: 4,
                            gap: {
                                xs: 2,
                                sm: 2
                            },
                            flexWrap: 'wrap'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Pagination$2f$Pagination$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__["Pagination"], {
                                count: totalPages,
                                page: page,
                                onChange: handlePageChange,
                                color: "primary",
                                showFirstButton: true,
                                showLastButton: true,
                                size: window.innerWidth < 600 ? "small" : "medium",
                                sx: {
                                    '& .MuiPaginationItem-root': {
                                        fontWeight: 600,
                                        fontSize: {
                                            xs: '0.75rem',
                                            sm: '0.875rem'
                                        }
                                    },
                                    '& .Mui-selected': {
                                        bgcolor: '#7c4dff !important',
                                        color: 'white'
                                    }
                                }
                            }, void 0, false, {
                                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                lineNumber: 1414,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$FormControl$2f$FormControl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormControl$3e$__["FormControl"], {
                                size: "small",
                                sx: {
                                    minWidth: {
                                        xs: '100%',
                                        sm: 120
                                    },
                                    maxWidth: {
                                        xs: '200px',
                                        sm: 'none'
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$InputLabel$2f$InputLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InputLabel$3e$__["InputLabel"], {
                                        children: "Per Page"
                                    }, void 0, false, {
                                        fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                        lineNumber: 1434,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Select$2f$Select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"], {
                                        value: limit,
                                        label: "Per Page",
                                        onChange: (e)=>{
                                            setLimit(Number(e.target.value));
                                            setPage(1);
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                                                value: 9,
                                                children: "9 per page"
                                            }, void 0, false, {
                                                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                                lineNumber: 1440,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                                                value: 12,
                                                children: "12 per page"
                                            }, void 0, false, {
                                                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                                lineNumber: 1441,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                                                value: 18,
                                                children: "18 per page"
                                            }, void 0, false, {
                                                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                                lineNumber: 1442,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                                                value: 24,
                                                children: "24 per page"
                                            }, void 0, false, {
                                                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                                lineNumber: 1443,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                        lineNumber: 1435,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                                lineNumber: 1433,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                        lineNumber: 1405,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                lineNumber: 1204,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ViewDetailsModal, {
                credential: selectedCredential,
                open: viewDetailsOpen,
                onClose: ()=>setViewDetailsOpen(false),
                onDownload: handleDownload
            }, void 0, false, {
                fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
                lineNumber: 1451,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx",
        lineNumber: 867,
        columnNumber: 5
    }, this);
}
_s(LearnerDashboard, "SWVakZlM4lcjUNRbfTzIyOj8lgA=");
_c6 = LearnerDashboard;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "LineChart");
__turbopack_context__.k.register(_c1, "DonutChart");
__turbopack_context__.k.register(_c2, "BarChart");
__turbopack_context__.k.register(_c3, "CredentialCard");
__turbopack_context__.k.register(_c4, "CredentialListCard");
__turbopack_context__.k.register(_c5, "ViewDetailsModal");
__turbopack_context__.k.register(_c6, "LearnerDashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/CredApp/src/utils/roleUtils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "canAccessDashboard",
    ()=>canAccessDashboard,
    "getPrimaryRoleType",
    ()=>getPrimaryRoleType,
    "getRoleDashboardPath",
    ()=>getRoleDashboardPath,
    "getUserDashboardPath",
    ()=>getUserDashboardPath,
    "hasRole",
    ()=>hasRole
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$src$2f$services$2f$auth$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CredApp/src/services/auth.service.ts [app-client] (ecmascript)");
;
async function getUserDashboardPath(user, userId) {
    try {
        // If user object is provided and has roles in its data, use those
        if (user && user.roles && Array.isArray(user.roles) && user.roles.length > 0) {
            // User has roles array with role IDs - need to fetch role details
            if (userId || user.id) {
                try {
                    const rolesData = await __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$src$2f$services$2f$auth$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthService"].getUserRoles(userId || user.id);
                    if (rolesData && rolesData.roles && rolesData.roles.length > 0) {
                        const primaryRole = rolesData.roles[0];
                        return getRoleDashboardPath(primaryRole.role_type);
                    }
                } catch (error) {
                    console.error('Error fetching user roles:', error);
                }
            }
        }
        // Default fallback to learner dashboard
        return '/dashboard/learner';
    } catch (error) {
        console.error('Error determining user dashboard path:', error);
        return '/dashboard/learner';
    }
}
function getRoleDashboardPath(roleType) {
    const roleMap = {
        'learner': '/dashboard/learner',
        'employer': '/dashboard/employer',
        'issuer': '/dashboard/institution',
        'institution': '/dashboard/institution',
        'admin': '/dashboard/admin'
    };
    return roleMap[roleType] || '/dashboard/learner';
}
function hasRole(userRoles, requiredRole) {
    if (!userRoles || userRoles.length === 0) {
        return false;
    }
    return userRoles.some((role)=>role.role_type === requiredRole);
}
function canAccessDashboard(userRoles, dashboardPath) {
    if (!userRoles || userRoles.length === 0) {
        return false;
    }
    // Extract role type from dashboard path (supports sub-paths)
    let requiredRole;
    if (dashboardPath.startsWith('/dashboard/learner')) {
        requiredRole = 'learner';
    } else if (dashboardPath.startsWith('/dashboard/employer')) {
        requiredRole = 'employer';
    } else if (dashboardPath.startsWith('/dashboard/institution')) {
        requiredRole = 'issuer';
    } else if (dashboardPath.startsWith('/dashboard/admin')) {
        requiredRole = 'admin';
    }
    if (!requiredRole) {
        return false;
    }
    return hasRole(userRoles, requiredRole);
}
function getPrimaryRoleType(userRoles) {
    var _userRoles_;
    if (!userRoles || userRoles.length === 0) {
        return null;
    }
    // Return the first role's type
    return ((_userRoles_ = userRoles[0]) === null || _userRoles_ === void 0 ? void 0 : _userRoles_.role_type) || null;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/CredApp/src/components/auth/RoleGuard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RoleGuard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CredApp/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CredApp/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CredApp/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$src$2f$hooks$2f$useAuth$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CredApp/src/hooks/useAuth.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$src$2f$services$2f$auth$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CredApp/src/services/auth.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$src$2f$utils$2f$roleUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CredApp/src/utils/roleUtils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function RoleGuard(param) {
    let { children, requiredRole, allowedPath } = param;
    _s();
    const { user, isAuthenticated, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$src$2f$hooks$2f$useAuth$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [isChecking, setIsChecking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [hasAccess, setHasAccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RoleGuard.useEffect": ()=>{
            const checkAccess = {
                "RoleGuard.useEffect.checkAccess": async ()=>{
                    setIsChecking(true);
                    // If not authenticated, redirect to login
                    if (!isLoading && !isAuthenticated) {
                        router.push('/auth/login');
                        return;
                    }
                    // Wait for authentication to complete
                    if (isLoading) {
                        return;
                    }
                    // If authenticated, check role-based access
                    if (user) {
                        try {
                            const userId = user.id || user._id;
                            if (!userId) {
                                console.error('No user ID found');
                                router.push('/auth/login');
                                return;
                            }
                            // Fetch user's roles
                            const rolesData = await __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$src$2f$services$2f$auth$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthService"].getUserRoles(userId);
                            if (!rolesData || !rolesData.roles || rolesData.roles.length === 0) {
                                // User has no roles - redirect to a default page or show error
                                console.warn('User has no roles assigned');
                                setHasAccess(false);
                                setIsChecking(false);
                                return;
                            }
                            const userRoles = rolesData.roles;
                            // Check if user has the required role (if specified)
                            if (requiredRole) {
                                const hasRequiredRole = userRoles.some({
                                    "RoleGuard.useEffect.checkAccess.hasRequiredRole": (role)=>role.role_type === requiredRole
                                }["RoleGuard.useEffect.checkAccess.hasRequiredRole"]);
                                if (!hasRequiredRole) {
                                    // Redirect to user's primary dashboard
                                    const userDashboard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$src$2f$utils$2f$roleUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRoleDashboardPath"])(userRoles[0].role_type);
                                    router.push(userDashboard);
                                    return;
                                }
                            }
                            // Check if user can access the specific path (if specified)
                            if (allowedPath) {
                                const canAccess = (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$src$2f$utils$2f$roleUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canAccessDashboard"])(userRoles, allowedPath);
                                if (!canAccess) {
                                    // Redirect to user's primary dashboard
                                    const userDashboard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$src$2f$utils$2f$roleUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRoleDashboardPath"])(userRoles[0].role_type);
                                    router.push(userDashboard);
                                    return;
                                }
                            }
                            // User has access
                            setHasAccess(true);
                        } catch (error) {
                            console.error('Error checking user roles:', error);
                            // On error, redirect to login
                            router.push('/auth/login');
                        }
                    }
                    setIsChecking(false);
                }
            }["RoleGuard.useEffect.checkAccess"];
            checkAccess();
        }
    }["RoleGuard.useEffect"], [
        user,
        isAuthenticated,
        isLoading,
        requiredRole,
        allowedPath,
        router
    ]);
    // Show loading while checking
    if (isLoading || isChecking) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center bg-gray-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"
                    }, void 0, false, {
                        fileName: "[project]/CredApp/src/components/auth/RoleGuard.tsx",
                        lineNumber: 110,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600",
                        children: "Verifying access..."
                    }, void 0, false, {
                        fileName: "[project]/CredApp/src/components/auth/RoleGuard.tsx",
                        lineNumber: 111,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/CredApp/src/components/auth/RoleGuard.tsx",
                lineNumber: 109,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/CredApp/src/components/auth/RoleGuard.tsx",
            lineNumber: 108,
            columnNumber: 7
        }, this);
    }
    // Show access denied message if no access
    if (!hasAccess) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center bg-gray-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center max-w-md p-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-16 h-16 text-red-500 mx-auto",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                            }, void 0, false, {
                                fileName: "[project]/CredApp/src/components/auth/RoleGuard.tsx",
                                lineNumber: 129,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/CredApp/src/components/auth/RoleGuard.tsx",
                            lineNumber: 123,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/CredApp/src/components/auth/RoleGuard.tsx",
                        lineNumber: 122,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold text-gray-900 mb-2",
                        children: "Access Restricted"
                    }, void 0, false, {
                        fileName: "[project]/CredApp/src/components/auth/RoleGuard.tsx",
                        lineNumber: 137,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 mb-6",
                        children: "You don't have permission to access this dashboard. You are being redirected to your dashboard..."
                    }, void 0, false, {
                        fileName: "[project]/CredApp/src/components/auth/RoleGuard.tsx",
                        lineNumber: 138,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/CredApp/src/components/auth/RoleGuard.tsx",
                lineNumber: 121,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/CredApp/src/components/auth/RoleGuard.tsx",
            lineNumber: 120,
            columnNumber: 7
        }, this);
    }
    // Render children if access is granted
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
_s(RoleGuard, "Kmsjs+3M4tAsT2Rx1C02SFH3dHc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$src$2f$hooks$2f$useAuth$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = RoleGuard;
var _c;
__turbopack_context__.k.register(_c, "RoleGuard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/CredApp/src/app/dashboard/learner/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LearnerDashboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CredApp/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$src$2f$components$2f$layout$2f$DashboardLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CredApp/src/components/layout/DashboardLayout.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$src$2f$components$2f$dashboard$2f$LearnerDashboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CredApp/src/components/dashboard/LearnerDashboard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$src$2f$components$2f$auth$2f$RoleGuard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CredApp/src/components/auth/RoleGuard.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
function LearnerDashboardPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$src$2f$components$2f$auth$2f$RoleGuard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        allowedPath: "/dashboard/learner",
        requiredRole: "learner",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$src$2f$components$2f$layout$2f$DashboardLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            title: "Learner Dashboard",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CredApp$2f$src$2f$components$2f$dashboard$2f$LearnerDashboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/CredApp/src/app/dashboard/learner/page.tsx",
                lineNumber: 12,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/CredApp/src/app/dashboard/learner/page.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/CredApp/src/app/dashboard/learner/page.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = LearnerDashboardPage;
var _c;
__turbopack_context__.k.register(_c, "LearnerDashboardPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=CredApp_src_3a1d7a20._.js.map