import React, { useState } from 'react';

// 공통으로 사용할 뱃지 색상 매핑
const METHOD_COLORS = {
  GET: 'bg-blue-500/20 text-blue-400 border-blue-500',
  POST: 'bg-green-500/20 text-green-400 border-green-500',
  PUT: 'bg-orange-500/20 text-orange-400 border-orange-500',
  DELETE: 'bg-red-500/20 text-red-400 border-red-500',
};

const ApiAccordion = ({
  method = 'POST',
  path = '/api/v1/hits',
  description = '우린이 타격(클릭) 전송',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [reqTab, setReqTab] = useState('Params');
  const [resTab, setResTab] = useState('Body');
  const [status, setStatus] = useState('idle'); // idle, loading, success
  const [response, setResponse] = useState(null);

  // Send 버튼 클릭 시 가짜 API 호출 시뮬레이션
  const handleSend = () => {
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setResponse({
        success: true,
        message: '우린이 타격 성공! ㅋㅋㅋ',
        damage: 50,
        timestamp: new Date().toISOString(),
      });
    }, 800); // 0.8초 딜레이
  };

  return (
    <div className="w-full max-w-4xl mx-auto mb-4 font-sans">
      {/* 1. 아코디언 헤더 (클릭하여 열기/닫기) */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-between p-4 cursor-pointer transition-colors border border-gray-700 rounded-t-lg ${isOpen ? 'bg-gray-800' : 'bg-gray-800/50 hover:bg-gray-800 rounded-b-lg'}`}
      >
        <div className="flex items-center gap-4">
          <span
            className={`px-3 py-1 text-xs font-bold border rounded ${METHOD_COLORS[method]}`}
          >
            {method}
          </span>
          <span className="text-gray-100 font-mono font-medium">{path}</span>
          <span className="text-gray-400 text-sm hidden sm:block">
            {description}
          </span>
        </div>
        <div className="text-gray-400">{isOpen ? '▲' : '▼'}</div>
      </div>

      {/* 2. 펼쳐지는 상세 영역 */}
      {isOpen && (
        <div className="bg-gray-800 border-x border-b border-gray-700 rounded-b-lg p-0 flex flex-col">
          {/* 요청(Request) 탭 메뉴 */}
          <div className="flex border-b border-gray-700 px-4 pt-2">
            {['Params', 'Authorization', 'Headers', 'Body'].map((tab) => (
              <button
                key={tab}
                onClick={() => setReqTab(tab)}
                className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                  reqTab === tab
                    ? 'border-blue-500 text-gray-100'
                    : 'border-transparent text-gray-400 hover:text-gray-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* 요청(Request) 입력 영역 */}
          <div className="p-4 bg-gray-800/50">
            {reqTab === 'Params' || reqTab === 'Headers' ? (
              <div className="flex flex-col gap-2">
                <div className="grid grid-cols-3 gap-2 mb-1 text-xs text-gray-500 font-medium px-1">
                  <div>Key</div>
                  <div>Value</div>
                  <div>Description</div>
                </div>
                {[1, 2].map((row) => (
                  <div key={row} className="grid grid-cols-3 gap-2">
                    <input
                      type="text"
                      placeholder="Key"
                      className="bg-gray-900 border border-gray-700 rounded p-2 text-sm text-gray-200 outline-none focus:border-blue-500"
                    />
                    <input
                      type="text"
                      placeholder="Value"
                      className="bg-gray-900 border border-gray-700 rounded p-2 text-sm text-gray-200 outline-none focus:border-blue-500"
                    />
                    <input
                      type="text"
                      placeholder="Description"
                      className="bg-gray-900 border border-gray-700 rounded p-2 text-sm text-gray-200 outline-none focus:border-blue-500"
                    />
                  </div>
                ))}
              </div>
            ) : reqTab === 'Body' ? (
              <textarea
                className="w-full h-32 bg-gray-900 border border-gray-700 rounded p-3 text-sm text-green-400 font-mono outline-none focus:border-blue-500 resize-y"
                placeholder='{\n  "target": "우린이",\n  "power": 100\n}'
              ></textarea>
            ) : (
              <div className="text-gray-500 text-sm p-4 text-center">
                Auth 설정 영역입니다.
              </div>
            )}
          </div>

          {/* 전송 버튼 (Action) */}
          <div className="px-4 py-3 flex justify-end border-t border-gray-700 bg-gray-800">
            <button
              onClick={handleSend}
              disabled={status === 'loading'}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded text-sm font-bold transition-colors disabled:opacity-50 flex items-center gap-2"
            >
              {status === 'loading' ? '전송 중...' : 'Send 🚀'}
            </button>
          </div>

          {/* 3. 응답(Response) 영역 (Send 버튼 누른 후 표시) */}
          {status !== 'idle' && (
            <div className="border-t-4 border-gray-900 bg-gray-800 rounded-b-lg">
              {/* 응답 상태 바 */}
              <div className="flex items-center justify-between px-4 py-2 border-b border-gray-700 bg-gray-800/80">
                <div className="flex items-center gap-4 text-sm font-medium">
                  <span className="text-gray-300">Response</span>
                  {status === 'loading' ? (
                    <span className="text-yellow-400">Waiting...</span>
                  ) : (
                    <>
                      <span className="text-green-400 flex items-center gap-1">
                        🟢 200 OK
                      </span>
                      <span className="text-gray-400">⏱ 124ms</span>
                      <span className="text-gray-400">📦 1.2 KB</span>
                    </>
                  )}
                </div>
              </div>

              {/* 응답 탭 및 뷰어 */}
              {status === 'success' && (
                <>
                  <div className="flex border-b border-gray-700 px-4">
                    {['Body', 'Headers'].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setResTab(tab)}
                        className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                          resTab === tab
                            ? 'border-green-500 text-gray-100'
                            : 'border-transparent text-gray-400 hover:text-gray-300'
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                  <div className="p-4 bg-gray-900 rounded-b-lg overflow-x-auto">
                    {resTab === 'Body' ? (
                      <pre className="text-sm font-mono text-gray-300 leading-relaxed">
                        {JSON.stringify(response, null, 2)}
                      </pre>
                    ) : (
                      <div className="text-sm text-gray-400 font-mono">
                        content-type: application/json
                        <br />
                        date: {new Date().toUTCString()}
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#1e1e1e] p-8">
      <h2 className="text-white text-2xl font-bold mb-6">API Page 테스트</h2>
      <ApiAccordion
        method="POST"
        path="/api/v1/hits"
        description="우린이 타격(클릭) 전송"
      />
      <ApiAccordion
        method="GET"
        path="/api/v1/status"
        description="우린이 현재 상태 조회"
      />
    </div>
  );
}
