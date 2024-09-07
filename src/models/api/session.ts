export type APIPretalxSessions = {
  code: string;
  submission_type: string;
  submission_type_id: number;
  state: string;

  image: string | null;
  title: string;
  abstract: string | null;
  description: string | null;
  notes: string | null;
  internal_notes: string | null;
  content_locale: string;

  slot: {
    start: string;
    end: string;
    room: string;
    room_id: number;
  } | null;
  duration: number | null;
  do_not_record: boolean;
  is_featured: boolean;

  speakers: {
    code: string;
    name: string;
    biography: string;
    avatar: string;
  }[];
  answers: {
    id: number;
    question: {
      id: number;
      question: Record<string, unknown>;
      required: boolean;
      target: string;
      options: unknown[];
    };
    answer: string;
    answer_file: string;
    submission: string;
    person: string;
    options: unknown[];
  }[];

  tags: string[];
  tag_ids: number[];
}[]
