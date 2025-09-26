import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerCreatepatternsInputSchema } from './TriggerCreatepatternsInputSchema';
import { TriggerSourceSchema } from './TriggerSourceSchema';
import { TriggerStateSchema } from './TriggerStateSchema';
import { SeveritySchema } from './SeveritySchema';
import { TriggerCreateNestedOneWithoutMergeFromInputSchema } from './TriggerCreateNestedOneWithoutMergeFromInputSchema';
import { ClauseTypeCreateNestedOneWithoutTriggerInputSchema } from './ClauseTypeCreateNestedOneWithoutTriggerInputSchema';
import { TriggerHitCreateNestedManyWithoutTriggerInputSchema } from './TriggerHitCreateNestedManyWithoutTriggerInputSchema';
import { AnalysisRequestCreateNestedManyWithoutTriggersInputSchema } from './AnalysisRequestCreateNestedManyWithoutTriggersInputSchema';

export const TriggerCreateWithoutMergeFromInputSchema: z.ZodType<Prisma.TriggerCreateWithoutMergeFromInput> = z.object({
  id: z.string().cuid().optional(),
  key: z.string(),
  label: z.string(),
  description: z.string().optional().nullable(),
  patterns: z.union([ z.lazy(() => TriggerCreatepatternsInputSchema),z.string().array() ]).optional(),
  source: z.lazy(() => TriggerSourceSchema).optional(),
  state: z.lazy(() => TriggerStateSchema).optional(),
  reviewNotes: z.string().optional().nullable(),
  promotedAt: z.coerce.date().optional().nullable(),
  defaultSeverity: z.lazy(() => SeveritySchema).optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  mergedInto: z.lazy(() => TriggerCreateNestedOneWithoutMergeFromInputSchema).optional(),
  clauseType: z.lazy(() => ClauseTypeCreateNestedOneWithoutTriggerInputSchema),
  hits: z.lazy(() => TriggerHitCreateNestedManyWithoutTriggerInputSchema).optional(),
  AnalysisRequest: z.lazy(() => AnalysisRequestCreateNestedManyWithoutTriggersInputSchema).optional()
}).strict() as z.ZodType<Prisma.TriggerCreateWithoutMergeFromInput>;

export default TriggerCreateWithoutMergeFromInputSchema;
