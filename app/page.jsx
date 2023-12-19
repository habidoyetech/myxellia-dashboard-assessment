"use client"
import Image from 'next/image';
import { Link } from '@chakra-ui/next-js'


export default function Home() {
  return (
    <main>
      <div>
        <Link href='/about' color='blue.400'  _hover={{ color: 'blue.500' }}>
          About
        </Link>
      </div>
      
    </main>
  )
}
