import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { HitterCreatetriggerKeywordsInputSchema } from './HitterCreatetriggerKeywordsInputSchema';
import { TriggerCreateNestedManyWithoutHittersInputSchema } from './TriggerCreateNestedManyWithoutHittersInputSchema';

export const HitterCreateInputSchema: z.ZodType<Prisma.HitterCreateInput> = z.strictObject({
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
  Trigger: z.lazy(() => TriggerCreateNestedManyWithoutHittersInputSchema).optional(),
});

export default HitterCreateInputSchema;
