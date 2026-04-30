import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const quizQuestions = [
  {
    id: 'moment',
    prompt: 'Qual dessas situações mais se aproxima do seu momento acadêmico ou profissional?',
    options: [
      { label: 'Estou perdido e não sei por onde começar', type: 'start' },
      { label: 'Já comecei, mas sinto que estou fazendo errado', type: 'accelerate' },
      { label: 'Quero alguém me orientando nas decisões', type: 'mentor' }
    ]
  },
  {
    id: 'context',
    prompt: 'Em qual área você sente mais dificuldade hoje?',
    options: [
      { label: 'Graduação ou pós-graduação', type: 'start' },
      { label: 'Carreira e processos seletivos', type: 'accelerate' },
      { label: 'Organização e direção geral', type: 'mentor' }
    ]
  },
  {
    id: 'block',
    prompt: 'O que mais te trava atualmente?',
    options: [
      { label: 'Não saber qual é o próximo passo', type: 'start' },
      { label: 'Não ver resultado no que estou fazendo', type: 'accelerate' },
      { label: 'Tomar decisões sozinho o tempo todo', type: 'mentor' }
    ]
  },
  {
    id: 'need',
    prompt: 'O que mais te ajudaria agora?',
    options: [
      { label: 'Um caminho claro para começar certo', type: 'start' },
      { label: 'Ajustar método, estratégia e materiais', type: 'accelerate' },
      { label: 'Ter orientação mais próxima', type: 'mentor' }
    ]
  }
];

const resultContent = {
  start: {
    title: 'Você precisa de direção clara',
    description:
      'Seu momento pede um caminho estruturado para começar com segurança, sem perder tempo com tentativa e erro.'
  },
  accelerate: {
    title: 'Você precisa ajustar sua estratégia',
    description:
      'Você já começou, mas precisa organizar melhor seu método, materiais e decisões para avançar com mais resultado.'
  },
  mentor: {
    title: 'Você precisa de orientação mais próxima',
    description:
      'Seu momento pede direcionamento mais individual para tomar decisões com segurança e não continuar travando sozinho.'
  }
};

const areas = [
  { label: 'Quero melhorar minha carreira', slug: 'carreira' },
  { label: 'Quero organizar meus estudos e pós', slug: 'academico' },
  { label: 'Quero aprender idiomas com método', slug: 'idiomas' },
  { label: 'Quero estudar melhor com ferramentas e IA', slug: 'vida-adulta' }
];

const QuizSection = ({ id = 'quiz' }) => {
  const [step, setStep] = useState('question');
  const [result, setResult] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const navigate = useNavigate();

  const handleAnswer = (type) => {
    const nextAnswers = [...answers, type];
    setAnswers(nextAnswers);

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      return;
    }

    const score = nextAnswers.reduce(
      (acc, answer) => ({
        ...acc,
        [answer]: (acc[answer] || 0) + 1
      }),
      { start: 0, accelerate: 0, mentor: 0 }
    );

    const finalType = ['start', 'accelerate', 'mentor'].reduce(
      (best, current) => (score[current] > score[best] ? current : best),
      'start'
    );

    setResult(finalType);
    setStep('result');
  };

  const handleRedirect = (slug) => navigate(`/${slug}`);

  const progress = (currentQuestion / quizQuestions.length) * 100;

  return (
    <section id={id} className="bg-black border-t-[3px] border-black py-10">
      <div className="max-w-xl mx-auto px-4 text-center">

        <AnimatePresence mode="wait">

          {step === 'question' && (
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <p className="text-xs uppercase tracking-widest text-primary/60 mb-2">
                Descubra seu próximo passo
              </p>

              <h2 className="text-xl font-black text-white mb-6">
                Responda algumas perguntas e descubra o melhor próximo passo para você
              </h2>

              <div className="h-1 bg-white/10 mb-2">
                <div className="h-full bg-primary" style={{ width: `${progress}%` }} />
              </div>

              <p className="text-xs text-white/30 mb-6">
                Pergunta {currentQuestion + 1} de {quizQuestions.length}
              </p>

              <p className="text-lg font-black text-white mb-4">
                {quizQuestions[currentQuestion].prompt}
              </p>

              <div className="flex flex-col gap-2">
                {quizQuestions[currentQuestion].options.map((option) => (
                  <button
                    key={option.label}
                    onClick={() => handleAnswer(option.type)}
                    className="bg-white/5 border border-white/20 p-3 rounded-xl text-white font-bold hover:bg-primary hover:text-black transition"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 'result' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <div className="bg-primary text-black p-6 rounded-2xl border-2 border-black">
                <h2 className="text-2xl font-black mb-2">
                  {resultContent[result].title}
                </h2>

                <p className="mb-5 font-bold">
                  {resultContent[result].description}
                </p>

                <p className="text-xs uppercase mb-3 opacity-70">
                  Baseado no seu momento, escolha por onde continuar:
                </p>

                <div className="flex flex-col gap-2">
                  {areas.map((area) => (
                    <button
                      key={area.slug}
                      onClick={() => handleRedirect(area.slug)}
                      className="bg-black text-primary p-3 rounded-lg font-bold flex justify-between items-center"
                    >
                      {area.label}
                      <ArrowRight size={16} />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </section>
  );
};

export default QuizSection;