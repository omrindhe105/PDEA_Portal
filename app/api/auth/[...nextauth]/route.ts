import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import { Prisma, PrismaClient } from "@prisma/client";
const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ""
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks:{
    async signIn(params){
      if(!params.user.email){
        return false;
      }
      try{
        const prisma = new PrismaClient();
        await prisma.user.create({
          data:{
            email: params.user.email,
            name: params.user.name ?? "Default Name"
          }
      })
      
      }
      catch(e){

      }
      return true;
    }
  }
})

export { handler as GET, handler as POST }
