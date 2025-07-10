import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Mail, Shield, Clock, Headphones, CheckCircle, TrendingUp } from 'lucide-react'
import './App.css'

function App() {
  const [selectedProvider, setSelectedProvider] = useState('')
  const [recoveredCount, setRecoveredCount] = useState(1247)

  // Simula contador dinâmico
  useEffect(() => {
    const interval = setInterval(() => {
      setRecoveredCount(prev => prev + Math.floor(Math.random() * 3))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const emailProviders = [
    {
      id: 'gmail',
      name: 'Gmail',
      description: 'Para contas @gmail.com',
      icon: '📧',
      color: 'bg-red-500 hover:bg-red-600',
      textColor: 'text-red-600',
      bgColor: 'bg-red-50 hover:bg-red-100'
    },
    {
      id: 'outlook',
      name: 'Hotmail/Outlook',
      description: 'Para @hotmail.com, @outlook.com, @live.com',
      icon: '📮',
      color: 'bg-blue-500 hover:bg-blue-600',
      textColor: 'text-blue-600',
      bgColor: 'bg-blue-50 hover:bg-blue-100'
    },
    {
      id: 'yahoo',
      name: 'Yahoo Mail',
      description: 'Para @yahoo.com, @yahoo.com.br',
      icon: '📬',
      color: 'bg-purple-500 hover:bg-purple-600',
      textColor: 'text-purple-600',
      bgColor: 'bg-purple-50 hover:bg-purple-100'
    },
    {
      id: 'outros',
      name: 'Outros Provedores',
      description: 'Domínios corporativos e outros',
      icon: '📭',
      color: 'bg-gray-500 hover:bg-gray-600',
      textColor: 'text-gray-600',
      bgColor: 'bg-gray-50 hover:bg-gray-100'
    }
  ]

  const benefits = [
    {
      icon: Clock,
      title: 'Rápido e Seguro',
      description: 'Processo em menos de 3 minutos'
    },
    {
      icon: Shield,
      title: '100% Confidencial',
      description: 'Seus dados são protegidos'
    },
    {
      icon: Headphones,
      title: 'Suporte Especializado',
      description: 'Equipe técnica disponível'
    }
  ]

  const handleRecovery = () => {
    if (!selectedProvider) {
      alert('Por favor, selecione o tipo da sua conta de email primeiro.')
      return
    }
    
    // Redireciona para a página de recuperação com parâmetro
    window.location.href = `https://recuperar-email.online/recuperar/?tipo=${selectedProvider}`
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header com Prova Social */}
      <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white py-3 px-4">
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-2 text-sm md:text-base font-semibold">
          <TrendingUp className="w-5 h-5 animate-pulse" />
          <span className="animate-pulse">🔥 {recoveredCount.toLocaleString()} contas de email recuperadas hoje</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="mb-6">
            <Mail className="w-16 h-16 mx-auto text-blue-600 mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Recupere Sua Conta de Email
              <span className="block text-green-600">em Menos de 3 Minutos</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Selecione o tipo da sua conta abaixo e siga nosso processo seguro e rápido
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="secondary" className="bg-green-100 text-green-800 px-4 py-2">
              ✅ Processo 100% Seguro
            </Badge>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800 px-4 py-2">
              🔒 Totalmente Confidencial
            </Badge>
            <Badge variant="secondary" className="bg-orange-100 text-orange-800 px-4 py-2">
              ⚡ Resultado Imediato
            </Badge>
          </div>
        </div>

        {/* Seleção de Provedores */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">
            Selecione o Tipo da Sua Conta de Email
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {emailProviders.map((provider) => (
              <Card 
                key={provider.id}
                className={`cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-lg border-2 ${
                  selectedProvider === provider.id 
                    ? 'border-green-500 bg-green-50 shadow-lg' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setSelectedProvider(provider.id)}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{provider.icon}</div>
                  <h3 className={`text-xl font-bold mb-2 ${provider.textColor}`}>
                    {provider.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{provider.description}</p>
                  {selectedProvider === provider.id && (
                    <div className="flex items-center justify-center gap-2 text-green-600">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-semibold">Selecionado</span>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Principal */}
        <div className="text-center mb-12">
          <Button 
            onClick={handleRecovery}
            size="lg"
            className={`text-xl px-12 py-6 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 ${
              selectedProvider 
                ? 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg' 
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
            disabled={!selectedProvider}
          >
            {selectedProvider ? '🚀 Iniciar Recuperação Agora' : '👆 Selecione uma opção acima'}
          </Button>
          
          {selectedProvider && (
            <p className="text-sm text-gray-600 mt-4 animate-pulse">
              Clique para prosseguir com a recuperação da sua conta {emailProviders.find(p => p.id === selectedProvider)?.name}
            </p>
          )}
        </div>

        {/* Benefícios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Elementos de Confiança */}
        <div className="bg-gray-50 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-6 text-gray-900">Por que Confiar em Nosso Serviço?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">50.000+</div>
              <p className="text-gray-600">Contas Recuperadas</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
              <p className="text-gray-600">Taxa de Sucesso</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
              <p className="text-gray-600">Suporte Disponível</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-sm text-gray-500">
          <p>Processo aprovado pelos principais provedores de email</p>
          <p className="mt-2">Garantia de segurança e privacidade dos seus dados</p>
        </div>
      </div>
    </div>
  )
}

export default App

