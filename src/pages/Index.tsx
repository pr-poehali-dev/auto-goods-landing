import { useState, useCallback, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import useEmblaCarousel from 'embla-carousel-react';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showGrid, setShowGrid] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToPrevious = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollToNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    
    const autoplay = setInterval(() => {
      if (!isAutoplayPaused) {
        emblaApi.scrollNext();
      }
    }, 5000);
    
    return () => {
      emblaApi.off('select', onSelect);
      clearInterval(autoplay);
    };
  }, [emblaApi, onSelect, isAutoplayPaused]);

  const products = [
    {
      id: 1,
      name: 'Моторные масла Premium',
      description: 'Синтетические масла для максимальной защиты двигателя',
      category: 'Масла и жидкости',
      image: 'https://cdn.poehali.dev/projects/7d92a597-2f46-4f3e-b08a-52e77ed94583/files/c8d88fee-95b6-4b20-9ad1-1c99e9f63eaf.jpg'
    },
    {
      id: 2,
      name: 'Тормозные колодки Pro',
      description: 'Надежное торможение в любых условиях',
      category: 'Тормозная система',
      image: 'https://cdn.poehali.dev/projects/7d92a597-2f46-4f3e-b08a-52e77ed94583/files/155bd199-a5fd-42d9-8f91-29b1fad8c4f0.jpg'
    },
    {
      id: 3,
      name: 'Аккумуляторы PowerMax',
      description: 'Высокая емкость и долгий срок службы',
      category: 'Электрика',
      image: 'https://cdn.poehali.dev/projects/7d92a597-2f46-4f3e-b08a-52e77ed94583/files/9884fb72-86b8-45f8-b69a-2eab754fa049.jpg'
    },
    {
      id: 4,
      name: 'Фильтры воздушные',
      description: 'Эффективная очистка воздуха для двигателя',
      category: 'Фильтры',
      image: '/placeholder.svg'
    }
  ];

  const productLines = [
    { name: 'Моторные масла', icon: 'Droplet', description: 'Синтетические и минеральные масла для всех типов двигателей' },
    { name: 'Фильтры', icon: 'Filter', description: 'Воздушные, масляные, топливные и салонные фильтры' },
    { name: 'Свечи зажигания', icon: 'Zap', description: 'Высококачественные свечи для стабильной работы двигателя' },
    { name: 'Тормозные колодки', icon: 'CircleStop', description: 'Надежные колодки для безопасного торможения' }
  ];

  const advantages = [
    { 
      title: 'Оригинальное качество', 
      icon: 'BadgeCheck', 
      text: 'Все товары сертифицированы и проходят строгий контроль качества. Мы работаем напрямую с производителями.',
      image: 'https://cdn.poehali.dev/projects/7d92a597-2f46-4f3e-b08a-52e77ed94583/files/c8d88fee-95b6-4b20-9ad1-1c99e9f63eaf.jpg'
    },
    { 
      title: 'Быстрая доставка', 
      icon: 'Truck', 
      text: 'Отправка в день заказа по всей России. Собственная логистическая сеть гарантирует сроки.',
      image: 'https://cdn.poehali.dev/projects/7d92a597-2f46-4f3e-b08a-52e77ed94583/files/155bd199-a5fd-42d9-8f91-29b1fad8c4f0.jpg'
    },
    { 
      title: 'Гарантия', 
      icon: 'Shield', 
      text: 'До 3 лет гарантии на все позиции. Бесплатная замена в случае заводского брака.',
      image: 'https://cdn.poehali.dev/projects/7d92a597-2f46-4f3e-b08a-52e77ed94583/files/9884fb72-86b8-45f8-b69a-2eab754fa049.jpg'
    },
    { 
      title: 'Консультации', 
      icon: 'Headphones', 
      text: 'Профессиональная помощь в подборе запчастей 24/7. Наши специалисты всегда на связи.',
      image: 'https://cdn.poehali.dev/projects/7d92a597-2f46-4f3e-b08a-52e77ed94583/files/c8d88fee-95b6-4b20-9ad1-1c99e9f63eaf.jpg'
    }
  ];

  const faqItems = [
    { q: 'Как сделать заказ?', a: 'Выберите товар, добавьте в корзину и оформите заказ. Мы свяжемся с вами для подтверждения.' },
    { q: 'Какие способы оплаты доступны?', a: 'Принимаем наличные, карты, банковские переводы и электронные платежи.' },
    { q: 'Сколько времени занимает доставка?', a: 'По Москве - 1-2 дня, по России - 3-7 дней в зависимости от региона.' },
    { q: 'Можно ли вернуть товар?', a: 'Да, в течение 14 дней с момента покупки при сохранении товарного вида.' },
    { q: 'Предоставляете ли вы гарантию?', a: 'Все товары имеют официальную гарантию производителя от 1 до 3 лет.' }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className={`min-h-screen bg-background ${showGrid ? 'grid-guide' : ''}`}>
      <Button 
        onClick={() => setShowGrid(!showGrid)}
        className="fixed bottom-4 left-4 z-50 text-xs sm:text-sm"
        variant="outline"
        size="sm"
      >
        <Icon name={showGrid ? 'EyeOff' : 'Eye'} size={14} className="mr-1 sm:mr-2" />
        <span className="hidden sm:inline">{showGrid ? 'Скрыть' : 'Показать'} сетку</span>
        <span className="sm:hidden">{showGrid ? 'Сетка' : 'Сетка'}</span>
      </Button>

      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-20 z-50 w-12 h-12 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all animate-bounce-in hover:animate-float"
          style={{ right: 'calc((100vw - min(100vw - 2rem, 1400px)) / 2)' }}
          size="icon"
        >
          <Icon name="ArrowUp" size={24} />
        </Button>
      )}
      
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Car" size={28} className="text-primary sm:w-8 sm:h-8 animate-pulse-glow" />
              <span className="text-xl sm:text-2xl font-bold hover:text-primary transition-colors">AutoParts Pro</span>
            </div>
            
            <div className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection('hero')} className="hover:text-primary hover:scale-110 transition-all">Главная</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-primary hover:scale-110 transition-all">О нас</button>
              <button onClick={() => scrollToSection('lines')} className="hover:text-primary hover:scale-110 transition-all">Линейки</button>
              <button onClick={() => scrollToSection('products')} className="hover:text-primary hover:scale-110 transition-all">Продукция</button>
              <button onClick={() => scrollToSection('advantages')} className="hover:text-primary hover:scale-110 transition-all">Преимущества</button>
              <button onClick={() => scrollToSection('faq')} className="hover:text-primary hover:scale-110 transition-all">FAQ</button>
              <button onClick={() => scrollToSection('contacts')} className="hover:text-primary hover:scale-110 transition-all">Контакты</button>
            </div>

            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Icon name={isMenuOpen ? 'X' : 'Menu'} size={24} />
            </Button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 flex flex-col gap-3 animate-fade-in">
              <button onClick={() => scrollToSection('hero')} className="text-left hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection('about')} className="text-left hover:text-primary transition-colors">О нас</button>
              <button onClick={() => scrollToSection('lines')} className="text-left hover:text-primary transition-colors">Линейки</button>
              <button onClick={() => scrollToSection('products')} className="text-left hover:text-primary transition-colors">Продукция</button>
              <button onClick={() => scrollToSection('advantages')} className="text-left hover:text-primary transition-colors">Преимущества</button>
              <button onClick={() => scrollToSection('faq')} className="text-left hover:text-primary transition-colors">FAQ</button>
              <button onClick={() => scrollToSection('contacts')} className="text-left hover:text-primary transition-colors">Контакты</button>
            </div>
          )}
        </div>
      </nav>

      <section id="hero" className="pt-16 relative w-full">
        <div 
          className="relative w-full h-[512px]"
          onMouseEnter={() => setIsAutoplayPaused(true)}
          onMouseLeave={() => setIsAutoplayPaused(false)}
        >
          <div className="overflow-hidden h-full" ref={emblaRef}>
            <div className="flex h-full">
              {advantages.map((adv, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 h-full relative">
                  <img 
                    src={adv.image} 
                    alt={adv.title} 
                    className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
                </div>
              ))}
            </div>
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-background/30 hover:bg-background/60 backdrop-blur-sm text-white"
            onClick={scrollToPrevious}
          >
            <Icon name="ChevronLeft" size={32} />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-background/30 hover:bg-background/60 backdrop-blur-sm text-white"
            onClick={scrollToNext}
          >
            <Icon name="ChevronRight" size={32} />
          </Button>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
            {advantages.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === selectedIndex ? 'bg-white w-10' : 'bg-white/40'
                }`}
                onClick={() => emblaApi?.scrollTo(index)}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-card/50">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 animate-slide-in-left">Кто мы?</h2>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-6 space-y-4 sm:space-y-6 animate-slide-in-left">
              <p className="text-base sm:text-lg text-muted-foreground">H’ANZauto — это немецкий бренд автозапчастей, основанный в 1961 году компанией Hanz-Ersatzteil-Fahrzeuge. С первых дней мы создавали детали для немецких автомобилей, делая ставку на точность, надёжность и качество.

Со временем ассортимент H’ANZauto вырос — сегодня мы производим запчасти для популярных марок по всему миру, сохраняя немецкие стандарты в каждой детали.

В 2010 году часть производства была перенесена в Китай, чтобы объединить немецкую инженерную школу с современными технологиями и оптимальными производственными затратами. Более двухсот специалистов переехали вместе с компанией, чтобы сохранить традиции и контроль качества.

Сегодня H’ANZauto — это сочетание немецкой инженерии, инноваций и глобальной логистики. Наши заводы в Германии и Китае позволяют быстро поставлять продукцию клиентам в разных странах, обеспечивая стабильное качество и конкурентную цену.

H’ANZauto — немецкое качество, созданное для вашего автомобиля.</p>
              <p className="text-base sm:text-lg text-muted-foreground"></p>
              <p className="text-base sm:text-lg text-muted-foreground"></p>
            </div>
            <div className="col-span-12 md:col-span-6 grid grid-cols-12 gap-4 sm:gap-6">
              <Card className="col-span-6 text-center hover:scale-110 hover:rotate-2 transition-all animate-bounce-in" style={{animationDelay: '0.1s'}}>
                <CardHeader className="py-4 sm:py-6">
                  <CardTitle className="text-3xl sm:text-4xl text-primary animate-pulse-glow">15+</CardTitle>
                  <CardDescription className="text-xs sm:text-sm">лет на рынке</CardDescription>
                </CardHeader>
              </Card>
              <Card className="col-span-6 text-center hover:scale-110 hover:rotate-2 transition-all animate-bounce-in" style={{animationDelay: '0.2s'}}>
                <CardHeader className="py-4 sm:py-6">
                  <CardTitle className="text-3xl sm:text-4xl text-primary animate-pulse-glow">50К+</CardTitle>
                  <CardDescription className="text-xs sm:text-sm">довольных клиентов</CardDescription>
                </CardHeader>
              </Card>
              <Card className="col-span-6 text-center hover:scale-110 hover:rotate-2 transition-all animate-bounce-in" style={{animationDelay: '0.3s'}}>
                <CardHeader className="py-4 sm:py-6">
                  <CardTitle className="text-3xl sm:text-4xl text-primary animate-pulse-glow">10К+</CardTitle>
                  <CardDescription className="text-xs sm:text-sm">товаров в наличии</CardDescription>
                </CardHeader>
              </Card>
              <Card className="col-span-6 text-center hover:scale-110 hover:rotate-2 transition-all animate-bounce-in" style={{animationDelay: '0.4s'}}>
                <CardHeader className="py-4 sm:py-6">
                  <CardTitle className="text-3xl sm:text-4xl text-primary animate-pulse-glow">100%</CardTitle>
                  <CardDescription className="text-xs sm:text-sm">оригинал</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="lines" className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 animate-rotate-in">Линейки продукции</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
            Выберите категорию товаров для вашего автомобиля
          </p>
        </div>
      </section>

      <section id="products" className="py-20 bg-card/50">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 animate-slide-in-left">Подбор товара</h2>
          <div className="grid grid-cols-12 gap-6">
            {productLines.map((line, index) => (
              <Card key={index} className="col-span-12 md:col-span-6 lg:col-span-3 hover:scale-110 hover:border-primary hover:shadow-2xl transition-all cursor-pointer group animate-flip-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="mb-4 group-hover:animate-float">
                    <Icon name={line.icon as any} size={48} className="text-primary group-hover:text-secondary group-hover:rotate-12 transition-all" />
                  </div>
                  <CardTitle className="text-xl">{line.name}</CardTitle>
                  <CardDescription className="text-base">{line.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 animate-rotate-in">Наши преимущества</h2>
          
          <div className="grid grid-cols-12 gap-6 sm:gap-8">
            {advantages.map((adv, index) => (
              <div key={index} className="col-span-12 md:col-span-6 lg:col-span-3 animate-bounce-in hover:scale-105 transition-transform" style={{animationDelay: `${index * 0.15}s`}}>
                <div className="mb-4 inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 hover:bg-primary/30 hover:rotate-12 transition-all animate-float">
                  <Icon name={adv.icon as any} size={40} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{adv.title}</h3>
                <p className="text-muted-foreground">{adv.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-card/50">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 animate-slide-in-left">Часто задаваемые вопросы</h2>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12">
              <Accordion type="single" collapsible className="space-y-4">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-3 sm:px-6 bg-background hover:border-primary hover:scale-102 transition-all animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                    <AccordionTrigger className="text-base sm:text-lg font-semibold hover:text-primary text-left">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm sm:text-base text-left">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 animate-rotate-in">Контакты</h2>
          <div className="grid grid-cols-12 gap-6">
            <Card className="col-span-12 md:col-span-6 lg:col-span-3 hover:scale-105 hover:shadow-xl transition-all animate-slide-up">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="MapPin" size={24} className="text-primary animate-float" />
                  Адрес
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Москва, ул. Автомобильная, д. 15</p>
                <p className="text-muted-foreground">Ежедневно с 9:00 до 21:00</p>
              </CardContent>
            </Card>

            <Card className="col-span-12 md:col-span-6 lg:col-span-3 hover:scale-105 hover:shadow-xl transition-all animate-slide-up" style={{animationDelay: '0.1s'}}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Phone" size={24} className="text-primary animate-pulse-glow" />
                  Телефон
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">+7 (495) 123-45-67</p>
                <p className="text-muted-foreground">+7 (800) 555-35-35</p>
              </CardContent>
            </Card>

            <Card className="col-span-12 md:col-span-6 lg:col-span-3 hover:scale-105 hover:shadow-xl transition-all animate-slide-up" style={{animationDelay: '0.2s'}}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Mail" size={24} className="text-primary animate-float" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">info@autopartspro.ru</p>
                <p className="text-muted-foreground">support@autopartspro.ru</p>
              </CardContent>
            </Card>

            <Card className="col-span-12 md:col-span-6 lg:col-span-3 hover:scale-105 hover:shadow-xl transition-all animate-slide-up" style={{animationDelay: '0.3s'}}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Clock" size={24} className="text-primary animate-pulse-glow" />
                  График работы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Пн-Пт: 9:00 - 21:00</p>
                <p className="text-muted-foreground">Сб-Вс: 10:00 - 20:00</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center animate-fade-in">
            <h3 className="text-2xl font-bold mb-6 animate-slide-up">Мы в социальных сетях</h3>
            <div className="flex gap-4 justify-center">
              <Button size="icon" variant="outline" className="hover:bg-primary hover:text-primary-foreground hover:scale-125 hover:rotate-12 transition-all animate-bounce-in">
                <Icon name="Phone" size={24} />
              </Button>
              <Button size="icon" variant="outline" className="hover:bg-primary hover:text-primary-foreground hover:scale-125 hover:rotate-12 transition-all animate-bounce-in" style={{animationDelay: '0.1s'}}>
                <Icon name="Mail" size={24} />
              </Button>
              <Button size="icon" variant="outline" className="hover:bg-primary hover:text-primary-foreground hover:scale-125 hover:rotate-12 transition-all animate-bounce-in" style={{animationDelay: '0.2s'}}>
                <Icon name="MessageCircle" size={24} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-card py-8 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 AutoParts Pro. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;