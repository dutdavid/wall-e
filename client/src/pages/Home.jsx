import React, { useState, useffect } from 'react'
import { Loader, Card, FormField } from '../components'


const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);
  const [searchText, setSearchText] = useState('abc');

  return (
    <section className="max-w-7xl mx-auto">
      <div>
      <h1 className="font-extrabold text-[#222328] text-[32px]">
      The community Showcase</h1>
      <p className="mt-2 text-[#666e75] text-[16px] max-w[500px]">
    Browse Through a collection of immaginative and visually stunning images with DALL-E AI
      </p>
      </div>
    <div className="mt -16">
        <FormField/>
    </div>
    <div className="mt-10">
      {loading ? (
        <div className="flex justify-center items-center">
          <Loader />

        </div>
      ) : (
        <>
        {searchText && (
          <h2 className="font-medium text-[#66e75] text-xl mb-3">
            Showing results for <span className="text-[#222329]">{searchText}</span>
          </h2>
        )}

        </>
      )}

    </div>
    </section>
  )
}

export default Home