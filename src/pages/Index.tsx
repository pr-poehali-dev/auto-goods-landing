import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showGrid, setShowGrid] = useState(false);

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
    { name: 'Масла и жидкости', icon: 'Droplet', description: 'Полный ассортимент смазочных материалов' },
    { name: 'Тормозная система', icon: 'CircleStop', description: 'Колодки, диски, жидкости' },
    { name: 'Электрика', icon: 'Zap', description: 'Аккумуляторы, провода, датчики' },
    { name: 'Фильтры', icon: 'Filter', description: 'Воздушные, масляные, топливные' },
    { name: 'Подвеска', icon: 'Gauge', description: 'Амортизаторы, пружины, сайлентблоки' },
    { name: 'Освещение', icon: 'Lightbulb', description: 'Лампы, фары, LED-системы' }
  ];

  const advantages = [
    { title: 'Оригинальное качество', icon: 'BadgeCheck', text: 'Все товары сертифицированы' },
    { title: 'Быстрая доставка', icon: 'Truck', text: 'Отправка в день заказа' },
    { title: 'Гарантия', icon: 'Shield', text: 'До 3 лет на все позиции' },
    { title: 'Консультации', icon: 'Headphones', text: 'Помощь в подборе 24/7' }
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
        className="fixed bottom-4 left-4 z-50"
        variant="outline"
        size="sm"
      >
        <Icon name={showGrid ? 'EyeOff' : 'Eye'} size={16} className="mr-2" />
        {showGrid ? 'Скрыть' : 'Показать'} сетку
      </Button>
      
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Car" size={32} className="text-primary" />
              <span className="text-2xl font-bold">AutoParts Pro</span>
            </div>
            
            <div className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection('hero')} className="hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">О нас</button>
              <button onClick={() => scrollToSection('lines')} className="hover:text-primary transition-colors">Линейки</button>
              <button onClick={() => scrollToSection('products')} className="hover:text-primary transition-colors">Продукция</button>
              <button onClick={() => scrollToSection('advantages')} className="hover:text-primary transition-colors">Преимущества</button>
              <button onClick={() => scrollToSection('faq')} className="hover:text-primary transition-colors">FAQ</button>
              <button onClick={() => scrollToSection('contacts')} className="hover:text-primary transition-colors">Контакты</button>
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

      <section id="hero" className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-background -z-10"></div>
        <div className="container mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Качественные автозапчасти
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Широкий ассортимент оригинальных деталей для вашего автомобиля с доставкой по всей России
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="text-lg px-8" onClick={() => scrollToSection('products')}>
              <Icon name="ShoppingCart" size={20} className="mr-2" />
              Перейти в каталог
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8" onClick={() => scrollToSection('contacts')}>
              <Icon name="Phone" size={20} className="mr-2" />
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-card/50">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Кто мы?</h2>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-6 space-y-6 animate-fade-in">
              <p className="text-lg text-muted-foreground">
                <span className="text-primary font-semibold">AutoParts Pro</span> — ведущий поставщик автозапчастей на российском рынке с 2010 года.
              </p>
              <p className="text-lg text-muted-foreground">
                Мы специализируемся на поставках оригинальных деталей для всех марок автомобилей. Наша миссия — обеспечить каждого автовладельца качественными запчастями по доступным ценам.
              </p>
              <p className="text-lg text-muted-foreground">
                За годы работы мы наладили прямые контакты с производителями, что позволяет нам предлагать лучшие цены и гарантировать подлинность продукции.
              </p>
            </div>
            <div className="col-span-12 md:col-span-6 grid grid-cols-12 gap-6">
              <Card className="col-span-6 text-center hover:scale-105 transition-transform">
                <CardHeader>
                  <CardTitle className="text-4xl text-primary">15+</CardTitle>
                  <CardDescription>лет на рынке</CardDescription>
                </CardHeader>
              </Card>
              <Card className="col-span-6 text-center hover:scale-105 transition-transform">
                <CardHeader>
                  <CardTitle className="text-4xl text-primary">50К+</CardTitle>
                  <CardDescription>довольных клиентов</CardDescription>
                </CardHeader>
              </Card>
              <Card className="col-span-6 text-center hover:scale-105 transition-transform">
                <CardHeader>
                  <CardTitle className="text-4xl text-primary">10К+</CardTitle>
                  <CardDescription>товаров в наличии</CardDescription>
                </CardHeader>
              </Card>
              <Card className="col-span-6 text-center hover:scale-105 transition-transform">
                <CardHeader>
                  <CardTitle className="text-4xl text-primary">100%</CardTitle>
                  <CardDescription>оригинал</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="lines" className="py-20">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Линейки продукции</h2>
          <div className="grid grid-cols-12 gap-6">
            {productLines.map((line, index) => (
              <Card key={index} className="col-span-12 md:col-span-4 hover:scale-105 hover:border-primary transition-all cursor-pointer group animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="mb-4">
                    <Icon name={line.icon as any} size={48} className="text-primary group-hover:text-secondary transition-colors" />
                  </div>
                  <CardTitle className="text-xl">{line.name}</CardTitle>
                  <CardDescription className="text-base">{line.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="py-20 bg-card/50">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Популярная продукция</h2>
          <div className="grid grid-cols-12 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="col-span-12 md:col-span-6 lg:col-span-3 overflow-hidden hover:shadow-xl hover:scale-105 transition-all cursor-pointer group flex flex-col">
                <div className="aspect-square bg-muted/50 relative overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                  <div className="absolute top-2 right-2">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      {product.category}
                    </span>
                  </div>
                </div>
                <CardHeader className="flex-grow">
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0 mt-auto">
                  <div className="flex flex-col md:flex-row gap-2">
                    <Button variant="outline" className="flex-1">
                      <Icon name="Info" size={18} className="mr-2" />
                      Подробнее
                    </Button>
                    <Button className="flex-1 group-hover:bg-secondary group-hover:border-secondary transition-colors">
                      <Icon name="ShoppingCart" size={18} className="mr-2" />
                      В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Наши преимущества</h2>
          <div className="grid grid-cols-12 gap-8">
            {advantages.map((adv, index) => (
              <div key={index} className="col-span-12 md:col-span-6 lg:col-span-3 text-center animate-fade-in" style={{animationDelay: `${index * 0.15}s`}}>
                <div className="mb-4 inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 hover:bg-primary/30 transition-colors">
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
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Часто задаваемые вопросы</h2>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12">
              <Accordion type="single" collapsible className="space-y-4">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6 bg-background">
                    <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base">
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
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Контакты</h2>
          <div className="grid grid-cols-12 gap-6">
            <Card className="col-span-12 md:col-span-6 lg:col-span-3">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="MapPin" size={24} className="text-primary" />
                  Адрес
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Москва, ул. Автомобильная, д. 15</p>
                <p className="text-muted-foreground">Ежедневно с 9:00 до 21:00</p>
              </CardContent>
            </Card>

            <Card className="col-span-12 md:col-span-6 lg:col-span-3">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Phone" size={24} className="text-primary" />
                  Телефон
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">+7 (495) 123-45-67</p>
                <p className="text-muted-foreground">+7 (800) 555-35-35</p>
              </CardContent>
            </Card>

            <Card className="col-span-12 md:col-span-6 lg:col-span-3">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Mail" size={24} className="text-primary" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">info@autopartspro.ru</p>
                <p className="text-muted-foreground">support@autopartspro.ru</p>
              </CardContent>
            </Card>

            <Card className="col-span-12 md:col-span-6 lg:col-span-3">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Clock" size={24} className="text-primary" />
                  График работы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Пн-Пт: 9:00 - 21:00</p>
                <p className="text-muted-foreground">Сб-Вс: 10:00 - 20:00</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold mb-6">Мы в социальных сетях</h3>
            <div className="flex gap-4 justify-center">
              <Button size="icon" variant="outline" className="hover:bg-primary hover:text-primary-foreground">
                <Icon name="Phone" size={24} />
              </Button>
              <Button size="icon" variant="outline" className="hover:bg-primary hover:text-primary-foreground">
                <Icon name="Mail" size={24} />
              </Button>
              <Button size="icon" variant="outline" className="hover:bg-primary hover:text-primary-foreground">
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