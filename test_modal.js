// Simple test to validate modal positioning fixes
// This can be run in browser console to test the modal behavior

function testModalPositioning() {
  console.log('Testing modal positioning...');
  
  // Test 1: Check overlay CSS
  const overlay = document.getElementById('overlay');
  const overlayStyles = window.getComputedStyle(overlay);
  
  console.log('✓ Overlay positioning:', {
    position: overlayStyles.position,
    alignItems: overlayStyles.alignItems,
    justifyContent: overlayStyles.justifyContent,
    display: overlayStyles.display
  });
  
  // Test 2: Check modal CSS
  const modal = document.querySelector('.modal');
  const modalStyles = window.getComputedStyle(modal);
  
  console.log('✓ Modal positioning:', {
    position: modalStyles.position,
    margin: modalStyles.margin,
    maxWidth: modalStyles.maxWidth,
    maxHeight: modalStyles.maxHeight
  });
  
  // Test 3: Check calendar positioning
  const calendar = document.getElementById('calendar');
  const calendarStyles = window.getComputedStyle(calendar);
  
  console.log('✓ Calendar positioning:', {
    position: calendarStyles.position,
    top: calendarStyles.top,
    left: calendarStyles.left,
    right: calendarStyles.right,
    maxWidth: calendarStyles.maxWidth
  });
  
  // Test 4: Simulate modal opening
  console.log('✓ Testing modal open/close...');
  openModal();
  
  setTimeout(() => {
    const isModalVisible = overlay.classList.contains('open');
    const modalRect = modal.getBoundingClientRect();
    const viewportCenter = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2
    };
    const modalCenter = {
      x: modalRect.left + modalRect.width / 2,
      y: modalRect.top + modalRect.height / 2
    };
    
    console.log('✓ Modal visibility:', isModalVisible);
    console.log('✓ Modal center position:', modalCenter);
    console.log('✓ Viewport center:', viewportCenter);
    console.log('✓ Modal is centered:', 
      Math.abs(modalCenter.x - viewportCenter.x) < 50 &&
      Math.abs(modalCenter.y - viewportCenter.y) < 100
    );
    
    closeModal();
    console.log('✓ Modal positioning test complete!');
  }, 500);
}

// Export for browser testing
if (typeof window !== 'undefined') {
  window.testModalPositioning = testModalPositioning;
}
