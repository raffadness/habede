# Confetti Components

This directory contains confetti components for creating celebratory effects in your React application.

## Components

### 1. Confetti (Basic)
A simple confetti component using CSS animations.

**Props:**
- `isActive` (boolean): Controls whether confetti is visible
- `duration` (number): How long confetti stays visible (default: 5000ms)
- `pieceCount` (number): Number of confetti pieces (default: 150)
- `colors` (array): Array of colors for confetti pieces

**Usage:**
```jsx
import Confetti from './components/Confetti';

function MyComponent() {
  const [showConfetti, setShowConfetti] = useState(false);

  return (
    <div>
      <button onClick={() => setShowConfetti(true)}>
        Celebrate!
      </button>
      
      <Confetti 
        isActive={showConfetti}
        duration={5000}
        pieceCount={150}
        colors={['#ff0000', '#00ff00', '#0000ff']}
      />
    </div>
  );
}
```

### 2. ConfettiAdvanced
A physics-based confetti component with realistic animations.

**Props:**
- `isActive` (boolean): Controls whether confetti is visible
- `duration` (number): How long confetti stays visible (default: 8000ms)
- `pieceCount` (number): Number of confetti pieces (default: 200)
- `colors` (array): Array of colors for confetti pieces

**Features:**
- Physics-based movement with gravity and wind
- Bouncing off walls and floor
- Multiple shapes (square, circle, triangle)
- Rotation and realistic movement

**Usage:**
```jsx
import ConfettiAdvanced from './components/ConfettiAdvanced';

function MyComponent() {
  const [showConfetti, setShowConfetti] = useState(false);

  return (
    <div>
      <button onClick={() => setShowConfetti(true)}>
        Advanced Celebration!
      </button>
      
      <ConfettiAdvanced 
        isActive={showConfetti}
        duration={8000}
        pieceCount={200}
        colors={['#ff0000', '#00ff00', '#0000ff', '#ffff00']}
      />
    </div>
  );
}
```

### 3. ConfettiDemo
A demo component showing both confetti types in action.

**Usage:**
```jsx
import ConfettiDemo from './components/ConfettiDemo';

function App() {
  return (
    <div>
      <ConfettiDemo />
    </div>
  );
}
```

## Custom Hook

### useConfetti
A custom hook for easy confetti management.

**Usage:**
```jsx
import { useConfetti } from './hooks/useConfetti';
import Confetti from './components/Confetti';

function MyComponent() {
  const { isActive, trigger, stop } = useConfetti(5000);

  const handleCelebration = () => {
    trigger(); // Triggers confetti for 5 seconds
  };

  const handleStop = () => {
    stop(); // Stops confetti immediately
  };

  return (
    <div>
      <button onClick={handleCelebration}>Start Celebration</button>
      <button onClick={handleStop}>Stop</button>
      
      <Confetti isActive={isActive} />
    </div>
  );
}
```

## Integration with Existing App

To add confetti to your existing components, simply import and use:

```jsx
// In any of your layout components (hero.jsx, ucapan.jsx, etc.)
import Confetti from '../components/Confetti';

// Add state for confetti
const [showConfetti, setShowConfetti] = useState(false);

// Add confetti component at the end of your JSX
<Confetti isActive={showConfetti} />

// Trigger confetti on specific events
const handleSpecialEvent = () => {
  setShowConfetti(true);
  setTimeout(() => setShowConfetti(false), 5000);
};
```

## Performance Notes

- The basic confetti component is lightweight and suitable for frequent use
- The advanced confetti component uses more CPU due to physics calculations
- Consider reducing `pieceCount` on lower-end devices
- Both components automatically clean up when `isActive` becomes false

## Customization

You can easily customize colors, piece counts, and durations by modifying the props. For more advanced customization, you can modify the component source code to add:

- Different shapes
- Sound effects
- Particle trails
- Custom animations
- Responsive behavior
