
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import pb from '@/lib/pocketbaseClient.js';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Send, CheckCircle2 } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      await pb.collection('contacts').create(formData, { $autoCancel: false });
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('Contact submission error:', err);
      setStatus('error');
      setErrorMessage('Nao foi possivel enviar sua mensagem agora. Tente novamente.');
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-background px-4 py-16">
      <Helmet>
        <title>Contato - O Meridiano</title>
      </Helmet>

      <div className="w-full max-w-2xl bg-secondary border-[3px] border-black rounded-3xl p-8 md:p-12 neo-shadow relative">
        <h1 className="text-5xl font-black font-heading mb-4 text-center">Tire suas duvidas</h1>
        <p className="text-xl font-bold text-center mb-10">Se voce nao sabe por onde comecar, me conte seu momento e eu te ajudo a encontrar o melhor caminho.</p>

        {status === 'success' ? (
          <div className="bg-card border-[3px] border-black rounded-2xl p-10 text-center neo-shadow flex flex-col items-center">
            <CheckCircle2 className="w-20 h-20 text-primary mb-6" />
            <h2 className="text-3xl font-black font-heading mb-4">Mensagem enviada</h2>
            <p className="text-lg font-bold mb-8">Recebi seu contato e vou responder no seu e-mail assim que puder.</p>
            <Button
              onClick={() => setStatus('idle')}
              className="bg-primary text-black border-[3px] border-black rounded-xl neo-shadow hover:-translate-y-1 font-black text-lg h-14 px-8"
            >
              Enviar outra mensagem
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 bg-card border-[3px] border-black rounded-2xl p-6 md:p-8 neo-shadow">
            {status === 'error' && (
              <div className="bg-destructive/10 text-destructive border-[3px] border-destructive rounded-xl p-4 font-bold">
                {errorMessage}
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="name" className="font-bold text-lg">Nome</Label>
              <Input
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Como posso te chamar?"
                className="h-14 border-[3px] border-black rounded-xl text-lg font-medium text-black focus-visible:ring-primary focus-visible:ring-offset-2"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="font-bold text-lg">E-mail</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="seu@email.com"
                className="h-14 border-[3px] border-black rounded-xl text-lg font-medium text-black focus-visible:ring-primary focus-visible:ring-offset-2"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="font-bold text-lg">Mensagem</Label>
              <Textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Me conte do que voce precisa hoje."
                className="min-h-[150px] resize-none border-[3px] border-black rounded-xl text-lg font-medium text-black focus-visible:ring-primary focus-visible:ring-offset-2 p-4"
              />
            </div>

            <Button
              type="submit"
              disabled={status === 'loading'}
              className="w-full h-16 bg-primary text-black border-[3px] border-black rounded-xl neo-shadow hover:bg-primary/90 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all font-black text-xl mt-4"
            >
              {status === 'loading' ? 'Enviando...' : (
                <>
                  Enviar mensagem <Send className="w-5 h-5 ml-2" />
                </>
              )}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactPage;
