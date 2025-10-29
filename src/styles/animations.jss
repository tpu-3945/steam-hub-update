@keyframes calmGradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes flicker {
  0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% { opacity: 1; text-shadow: 0 0 5px #3b82f6, 0 0 10px #6366f1, 0 0 20px #8b5cf6; }
  20%, 22%, 24%, 55% { opacity: 0.7; text-shadow: none; }
}

@keyframes modalFade {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.fade-in-section {
  animation: fadeIn 0.6s ease-out forwards;
}
