import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema';
import { EnumSeverityFilterSchema } from './EnumSeverityFilterSchema';
import { SeveritySchema } from './SeveritySchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { AnalysisRequestScalarRelationFilterSchema } from './AnalysisRequestScalarRelationFilterSchema';
import { AnalysisRequestWhereInputSchema } from './AnalysisRequestWhereInputSchema';
import { TriggerHitListRelationFilterSchema } from './TriggerHitListRelationFilterSchema';

export const ClauseWhereInputSchema: z.ZodType<Prisma.ClauseWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ClauseWhereInputSchema),z.lazy(() => ClauseWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ClauseWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ClauseWhereInputSchema),z.lazy(() => ClauseWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  analysisRequestId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  order: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  content: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  triggerWarning: z.lazy(() => StringNullableListFilterSchema).optional(),
  severity: z.union([ z.lazy(() => EnumSeverityFilterSchema),z.lazy(() => SeveritySchema) ]).optional(),
  riskScore: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  categories: z.lazy(() => StringNullableListFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  analysisRequest: z.union([ z.lazy(() => AnalysisRequestScalarRelationFilterSchema),z.lazy(() => AnalysisRequestWhereInputSchema) ]).optional(),
  hits: z.lazy(() => TriggerHitListRelationFilterSchema).optional()
}).strict() as z.ZodType<Prisma.ClauseWhereInput>;

export default ClauseWhereInputSchema;
