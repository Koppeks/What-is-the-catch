import { hashPassword } from "../../server/src/passwordHandler";
import { prisma } from "./src/client";

async function main(){
    const password = await hashPassword("admin")
    await prisma.user.create({
      data:{
        username: "admin",
        email: "admin@admin.com",
        password,
        userRole: "ADMIN"
      }
    })
}

main().then(async ()=> {
  await prisma.$disconnect()
  console.log("seed run was a success")
}).catch(async (error) => {
  console.error("seed run was a disaster")
  console.log(error)
  await prisma.$disconnect()
  process.exit(1)
})