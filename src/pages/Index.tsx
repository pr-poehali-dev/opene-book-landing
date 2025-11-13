import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen relative flex flex-col">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 10, 10, 0.7), rgba(10, 10, 10, 0.7)), url('https://cdn.poehali.dev/projects/4b72b80c-c739-4508-937f-a767063bc681/files/fbab071b-740f-4fcb-8f9c-19842812a565.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      <div className="relative z-10 flex flex-col min-h-screen">
        <header className="p-6 md:p-8 lg:p-10 animate-fade-in">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wider" style={{ color: '#d4af37' }}>
            OPENEBOOK
          </h2>
        </header>

        <main className="flex-1 flex items-center justify-center px-6 md:px-12 lg:px-16">
          <div className="max-w-3xl text-center space-y-8 md:space-y-10 lg:space-y-12">
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight animate-fade-in"
              style={{ color: '#f0f0f0' }}
            >
              Больше, чем просто книга.
            </h1>

            <p 
              className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed animate-fade-in-delay"
              style={{ color: '#e0e0e0' }}
            >
              Каждая книга в нашем каталоге — это уникальная дверь в другой мир, 
              в чужую жизнь, в новую идею.
            </p>

            <p 
              className="text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto animate-fade-in-delay"
              style={{ color: '#cccccc' }}
            >
              Мы не просто продаем тексты. Мы предлагаем ключи. Ключи к пониманию, 
              к эмоциям, к открытиям. Наша задача — помочь вам найти ту самую дверь, 
              за которой вас ждет самое важное.
            </p>

            <div className="pt-6 md:pt-8 animate-fade-in-delay-long">
              <Button
                asChild
                size="lg"
                className="text-base md:text-lg px-8 md:px-12 py-6 md:py-7 rounded-md font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{ 
                  backgroundColor: '#d4af37',
                  color: '#0a0a0a',
                }}
              >
                <a 
                  href="https://t.me/Openbookrubot" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Найти свой ключ
                </a>
              </Button>
            </div>
          </div>
        </main>

        <footer className="p-6 md:p-8 text-center animate-fade-in">
          <p className="text-xs md:text-sm opacity-60" style={{ color: '#cccccc' }}>
            OPENEBOOK © 2025. Все права на книги принадлежат авторам.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;