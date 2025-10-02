import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { EnumAnalysisStatusFilterSchema } from './EnumAnalysisStatusFilterSchema';
import { AnalysisStatusSchema } from './AnalysisStatusSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';

export const AnalysisRunScalarWhereInputSchema: z.ZodType<Prisma.AnalysisRunScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => AnalysisRunScalarWhereInputSchema), z.lazy(() => AnalysisRunScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AnalysisRunScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AnalysisRunScalarWhereInputSchema), z.lazy(() => AnalysisRunScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  documentId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  status: z.union([ z.lazy(() => EnumAnalysisStatusFilterSchema), z.lazy(() => AnalysisStatusSchema) ]).optional(),
  engineVersion: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  startedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  finishedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  overallRisk: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  notes: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
});

export default AnalysisRunScalarWhereInputSchema;
