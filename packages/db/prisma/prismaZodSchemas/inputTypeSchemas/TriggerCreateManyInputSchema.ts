import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerCreatepatternsInputSchema } from './TriggerCreatepatternsInputSchema';
import { TriggerSourceSchema } from './TriggerSourceSchema';
import { TriggerStateSchema } from './TriggerStateSchema';
import { SeveritySchema } from './SeveritySchema';

export const TriggerCreateManyInputSchema: z.ZodType<Prisma.TriggerCreateManyInput> = z.strictObject({
  id: z.cuid().optional(),
  key: z.string(),
  label: z.string(),
  description: z.string().optional().nullable(),
  patterns: z.union([ z.lazy(() => TriggerCreatepatternsInputSchema), z.string().array() ]).optional(),
  source: z.lazy(() => TriggerSourceSchema).optional(),
  state: z.lazy(() => TriggerStateSchema).optional(),
  mergedIntoId: z.string().optional().nullable(),
  reviewNotes: z.string().optional().nullable(),
  promotedAt: z.coerce.date().optional().nullable(),
  hitterId: z.string(),
  defaultSeverity: z.lazy(() => SeveritySchema).optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export default TriggerCreateManyInputSchema;
