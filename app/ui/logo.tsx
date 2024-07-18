import { logo } from "../assets/constants"
import Link from 'next/link'
export function Logo(){
    return  <Link href="/" itemScope> {logo}</Link>
}