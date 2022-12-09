import express, {Express} from "express"
import cors from "cors"
import env from "dotenv"
import { AddressInfo } from "net"


const app: Express = express()

app.use(express.json())
app.use(cors())

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const adress = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${adress.port}`);
    } else {
        console.error(`Failure upon starting server.`)
    }
})
export default app