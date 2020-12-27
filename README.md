# SMG

A web app for music creators.

[Try it out here](https://mixreferences.com)

<img src="./src/assets/screenshot/smg-preview.gif" style="width: 300px"/>

## Description

The song mapping generator (SMG) will randomly choose 1 of over 1.6 billion unique combinations. This is meant to provide a new environment for music creator to compose new music.

## Main Technologies

- React
- Typescript
- Node
- Express

## How it works

- It chooses 1 out of 48 song structures
- For each section it randomly chooses the length of the setion (in bars)
- It chooses the BPM, the key, the scale, and the challenges.
- Based on the number of bars in each section and the BPM, it calculates the length of the song.
- Based on the scales formula and the selected key, it only enables that piano keys that are part of that scale.
- You can save the song map as a PDF while you work on your next song.
