import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { EnumTypeRequestFilterSchema } from './EnumTypeRequestFilterSchema';
import { TypeRequestSchema } from './TypeRequestSchema';
import { EnumAnalysisStatusFilterSchema } from './EnumAnalysisStatusFilterSchema';
import { AnalysisStatusSchema } from './AnalysisStatusSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const AnalysisRequestScalarWhereInputSchema: z.ZodType<Prisma.AnalysisRequestScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AnalysisRequestScalarWhereInputSchema),z.lazy(() => AnalysisRequestScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AnalysisRequestScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AnalysisRequestScalarWhereInputSchema),z.lazy(() => AnalysisRequestScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => EnumTypeRequestFilterSchema),z.lazy(() => TypeRequestSchema) ]).optional(),
  status: z.union([ z.lazy(() => EnumAnalysisStatusFilterSchema),z.lazy(() => AnalysisStatusSchema) ]).optional(),
  sourceUrl: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  language: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict() as z.ZodType<Prisma.AnalysisRequestScalarWhereInput>;

export default AnalysisRequestScalarWhereInputSchema;
