import Image from 'next/image'
import Layout from '../components/Layout'
import Hero from '../components/home/hero'
// import Animation from '../components/home/animation'-> hero>image위치로 이동

export default function Home() {
  return (
    <Layout >
      <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <Hero />

        </div>
      </section>
    </Layout>
  )
}
