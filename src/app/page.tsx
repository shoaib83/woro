 export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-200 via-white to-blue-200">
      {/* Heading */}
      <div className="text-center py-10">
        <h1 className="text-4xl font-extrabold text-gray-900 drop-shadow-lg">
          shoaib hassan specialist in artificial intelligence
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          welcome to my office
        </p>
      </div>

      {/* Templates Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-10">
        <div className="p-6 rounded-2xl shadow-lg bg-red-500">ai chat bots and recover a other histoy</div>
        <div className="p-6 rounded-2xl shadow-lg bg-green-500">Pehla chatbot jo MIT me bana, sirf basic text reply kar sakta tha.</div>
        <div className="p-6 rounded-2xl shadow-lg bg-blue-500">Mental health patient ka simulate karta tha, ELIZA se thoda advanced.</div>
        <div className="p-6 rounded-2xl shadow-lg bg-yellow-500">Entertainment ke liye human-like conversation banata tha.</div>
        <div className="p-6 rounded-2xl shadow-lg bg-purple-500">Natural language processing use karta tha, chatbot competitions jeeta.</div>
        <div className="p-6 rounded-2xl shadow-lg bg-pink-500">SmarterChild: Yahoo Messenger aur MSN pe popular chatbot tha.</div>
        <div className="p-6 rounded-2xl shadow-lg bg-orange-500">Siri, Alexa, Google Assistant: AI aur voice recognition ke sath smart assistants</div>
        <div className="p-6 rounded-2xl shadow-lg bg-teal-500">ChatGPT aur Advanced LLMs: Human-level conversations aur agents ban gaye jo kaam solve karte hain.</div>
      </div>

      {/* Image Section */}
      <div className="flex justify-center my-10">
        src="/shoaib hussain" 
        <div className="w-64 h-64 border-10 border-dashed border-red-600 rounded-xl flex items-center justify-center text-green-700">
          <span>Rana Shoaib Hassan is a specialist in Artificial Intelligence with a strong command of modern technologies.
He has dedicated his expertise to developing intelligent systems that can solve real-world problems.</span>
        </div>
      </div>

      {/* Buttons Section */}
      <div className="flex justify-center gap-10 pb-10 flex-wrap">
        <button className="px-6 py-2 rounded-xl bg-red-500 text-black shadow-md hover:bg-red-600">
          projects
        </button>
        <button className="px-6 py-2 rounded-xl bg-green-500 text-yellow shadow-md hover:bg-green-600">
          asinemints recover
        </button>
        <button className="px-6 py-2 rounded-xl bg-blue-500 text-green shadow-md hover:bg-blue-600">
          cotacts
        </button>
        <button className="px-6 py-2 rounded-xl bg-purple-500 text-white shadow-md hover:bg-purple-600">
          chat
        </button>
        <button className="px-6 py-2 rounded-xl bg-yellow-500 text-black shadow-md hover:bg-yellow-600">
          search
        </button>
      </div>
    </main>
  );
}
