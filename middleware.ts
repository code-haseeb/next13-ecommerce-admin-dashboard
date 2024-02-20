import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/api/:path*"],
});

//In server-side web application frameworks, the term middleware is often more specifically used to refer to pre-built software components that can be added to the framework's request/response processing pipeline, to handle tasks such as database access.

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
