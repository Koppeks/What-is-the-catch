import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { HitterCreatetriggerKeywordsInputSchema } from './HitterCreatetriggerKeywordsInputSchema';

export const HitterUncheckedCreateWithoutTriggerInputSchema: z.ZodType<Prisma.HitterUncheckedCreateWithoutTriggerInput> = z.strictObject({
  id: z.cuid().optional(),
  slug: z.string(),
  version: z.string().optional(),
  defaultScoring: z.number().optional(),
  label: z.string(),
  isActive: z.boolean().optional(),
  triggerInstruction: z.string(),
  triggerKeywords: z.union([ z.lazy(() => HitterCreatetriggerKeywordsInputSchema), z.string().array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export default HitterUncheckedCreateWithoutTriggerInputSchema;
