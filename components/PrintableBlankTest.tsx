import React from 'react';
import { Questionnaire } from '../types';

interface PrintableBlankTestProps {
  questionnaire: Questionnaire;
}

const PrintableBlankTest: React.FC<PrintableBlankTestProps> = ({ questionnaire }) => (
  <div className="print-only p-8 font-serif bg-white text-black">
    <header className="text-center mb-8 border-b pb-4">
      <h1 className="text-3xl font-bold">{questionnaire.title}</h1>
    </header>
    <main>
      {questionnaire.introduction && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2 border-b">Introdução</h2>
          <p className="text-gray-800 whitespace-pre-wrap leading-relaxed">{questionnaire.introduction}</p>
        </section>
      )}
      <section>
        <h2 className="text-xl font-semibold mb-4 border-b">Perguntas</h2>
        <div className="space-y-6">
          {questionnaire.questions.map((q, index) => (
            <div key={q.id}>
              <p className="font-semibold mb-2">{`${index + 1}. ${q.text}`}</p>
              <div className="space-y-2 pl-4">
                {q.options.map(opt => (
                  <div key={opt.value + opt.text} className="flex items-center">
                    <div className="w-5 h-5 border border-black rounded-sm mr-3 flex-shrink-0"></div>
                    <span>{opt.text}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
    <footer className="mt-12 pt-4 border-t text-center text-xs text-gray-600">
      <p>PsicoTest Pro - Material para aplicação profissional.</p>
    </footer>
  </div>
);

export default PrintableBlankTest;
