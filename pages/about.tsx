import type { NextPage } from 'next'
import Link from 'next/link'
import { Container, Main, Title, Description } from '../styles/shared'

const About: NextPage = () => {
  return (
    <Container>
      <Main>
        <Title>About Page</Title>
        <Description>
          <Link href="/">
            <a>&larr; Go Back</a>
          </Link>
        </Description>
      </Main>
    </Container>
  )
}

export default About