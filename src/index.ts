/**
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
 
import { getAllScreensMedia } from './screencapture';

document.addEventListener('DOMContentLoaded', async () => {
  const recordingButton = document.getElementById('recordingButton');
  if (!recordingButton) { return; }
  recordingButton.addEventListener('click', async () => {
    const streamsDiv = document.getElementById('streamsDiv');
    if (!streamsDiv) { return; }
    const streams: MediaStream[] = await getAllScreensMedia();
    while (streamsDiv.firstChild) {
      streamsDiv.removeChild(streamsDiv.firstChild);
    }
    
    streams.forEach(function(screen) {
      const videoElement = document.createElement('video');
      videoElement.style.width = "256px";
      videoElement.style.height = "192px";
      videoElement.setAttribute("autoplay", "");
      videoElement.srcObject = screen;
      streamsDiv.appendChild(videoElement);
    });
  });
});
