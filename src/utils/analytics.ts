declare global {
    interface Window {
      gtag?: (...args: any[]) => void;
    }
  }
  
  /**
   * Tracks custom events in Google Analytics 4
   * @param action - The event action name
   * @param category - The event category (e.g., "button_click")
   * @param label - A descriptive label for the event
   */
  export const sendEvent = (
    action: string,
    category: string,
    label: string
  ): void => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", action, {
        event_category: category,
        event_label: label,
      });
    }
  };
  