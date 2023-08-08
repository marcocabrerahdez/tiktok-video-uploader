import moviepy.editor as mpy

import get_country as gc
import numpy as np


def background_clip():
    # Use a video clip as the background
    background_clip = mpy.VideoFileClip("./assets/background.mov").set_position('center', 'center')

    return background_clip


def flag_clip(flag_image, start=0, end=4):
    # Create a video clip from the image and place it at the center
    flag_clip = mpy.ImageClip(np.array(flag_image)).set_start(start).set_end(end).set_position('center', 'center')

    return flag_clip


def answer_clip(country_name, start=4, end=5):
    # Create a text clip with country name
    answer_clip = mpy.TextClip(country_name, fontsize=100, color='white', font='Amiri-Bold').set_start(start).set_end(end).set_position(('center', 1440))

    return answer_clip


def question_clip(question):
    # Create a text clip with country name
    text_clip = mpy.TextClip(question, fontsize=100, color='white', font='Amiri-Bold').set_position(('center', 480))

    return text_clip


def main():
    # Create an array the clips to be combined with flag, answer
    video_clips = []

    # Create a video clip from the background,
    # video has to las 60 seconds but the background is only 2 seconds long,
    # so we loop it 30 times and resize it to fit the screen
    background = background_clip().loop(30)

    video_clips.append(background)

    question = "What country is this?"

    # Create a video clip from the image and place it at the center
    question = question_clip(question)

    video_clips.append(question)

    # Generate 12 random flags and country names
    for i in range(0, 60, 5):
        # Generate a random flag image and country name
        flag_image, country_name = gc.generate_random_flag_with_name()
        flag = flag_clip(flag_image, start=i+1, end=i+5)
        answer = answer_clip(country_name, start=i+4, end=i+5)

        video_clips.append(flag)
        video_clips.append(answer)

    # Combine the flag and text clips
    video_clip = mpy.CompositeVideoClip(video_clips, size=(1080, 1920))

    # Set the duration of the clip to 10 seconds
    video_clip = video_clip.set_duration(60)

    # Write the video to a file
    video_clip.write_videofile("flag_video.mp4", fps=24)

    # CLose the video clip
    video_clip.close()


if __name__ == "__main__":
    main()