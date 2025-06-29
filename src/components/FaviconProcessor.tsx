
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { removeBackground, loadImage } from '@/utils/backgroundRemoval';

export const FaviconProcessor = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [processedImage, setProcessedImage] = useState<string | null>(null);

  const processFavicon = async () => {
    setIsProcessing(true);
    try {
      // Load the current favicon
      const response = await fetch('/lovable-uploads/afcb2514-dfbc-4d6a-b7b3-9b209c75df56.png');
      const blob = await response.blob();
      
      // Convert to image element
      const imageElement = await loadImage(blob);
      
      // Remove background
      const processedBlob = await removeBackground(imageElement);
      
      // Create URL for preview
      const processedUrl = URL.createObjectURL(processedBlob);
      setProcessedImage(processedUrl);
      
      // Download the processed image
      const link = document.createElement('a');
      link.href = processedUrl;
      link.download = 'favicon-no-bg.png';
      link.click();
      
    } catch (error) {
      console.error('Error processing favicon:', error);
      alert('Failed to process favicon. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Favicon Background Removal</h2>
      <div className="mb-4">
        <p className="text-sm text-gray-600 mb-2">Current favicon:</p>
        <img 
          src="/lovable-uploads/afcb2514-dfbc-4d6a-b7b3-9b209c75df56.png" 
          alt="Current favicon" 
          className="w-16 h-16 border"
        />
      </div>
      
      <Button 
        onClick={processFavicon} 
        disabled={isProcessing}
        className="w-full mb-4"
      >
        {isProcessing ? 'Processing...' : 'Remove Background'}
      </Button>
      
      {processedImage && (
        <div>
          <p className="text-sm text-gray-600 mb-2">Processed image (transparent background):</p>
          <img 
            src={processedImage} 
            alt="Processed favicon" 
            className="w-16 h-16 border"
          />
          <p className="text-xs text-gray-500 mt-2">
            The processed image has been downloaded. Upload it to replace your current favicon.
          </p>
        </div>
      )}
    </div>
  );
};
