import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerCreatepatternsInputSchema } from './TriggerCreatepatternsInputSchema';
import { TriggerSourceSchema } from './TriggerSourceSchema';
import { TriggerStateSchema } from './TriggerStateSchema';
import { SeveritySchema } from './SeveritySchema';
import { TriggerCreateNestedOneWithoutMergeFromInputSchema } from './TriggerCreateNestedOneWithoutMergeFromInputSchema';
import { TriggerCreateNestedManyWithoutMergedIntoInputSchema } from './TriggerCreateNestedManyWithoutMergedIntoInputSchema';
import { ClauseTypeCreateNestedOneWithoutTriggerInputSchema } from './ClauseTypeCreateNestedOneWithoutTriggerInputSchema';
import { AnalysisRequestCreateNestedManyWithoutTriggersInputSchema } from './AnalysisRequestCreateNestedManyWithoutTriggersInputSchema';

export const TriggerCreateWithoutHitsInputSchema: z.ZodType<Prisma.TriggerCreateWithoutHitsInput> = z.object({
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
  mergeFrom: z.lazy(() => TriggerCreateNestedManyWithoutMergedIntoInputSchema).optional(),
  clauseType: z.lazy(() => ClauseTypeCreateNestedOneWithoutTriggerInputSchema),
  AnalysisRequest: z.lazy(() => AnalysisRequestCreateNestedManyWithoutTriggersInputSchema).optional()
}).strict() as z.ZodType<Prisma.TriggerCreateWithoutHitsInput>;

export default TriggerCreateWithoutHitsInputSchema;
