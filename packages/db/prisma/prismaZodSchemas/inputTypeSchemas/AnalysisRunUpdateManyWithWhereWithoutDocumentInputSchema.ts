import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AnalysisRunScalarWhereInputSchema } from './AnalysisRunScalarWhereInputSchema';
import { AnalysisRunUpdateManyMutationInputSchema } from './AnalysisRunUpdateManyMutationInputSchema';
import { AnalysisRunUncheckedUpdateManyWithoutDocumentInputSchema } from './AnalysisRunUncheckedUpdateManyWithoutDocumentInputSchema';

export const AnalysisRunUpdateManyWithWhereWithoutDocumentInputSchema: z.ZodType<Prisma.AnalysisRunUpdateManyWithWhereWithoutDocumentInput> = z.object({
  where: z.lazy(() => AnalysisRunScalarWhereInputSchema),
  data: z.union([ z.lazy(() => AnalysisRunUpdateManyMutationInputSchema),z.lazy(() => AnalysisRunUncheckedUpdateManyWithoutDocumentInputSchema) ]),
}).strict() as z.ZodType<Prisma.AnalysisRunUpdateManyWithWhereWithoutDocumentInput>;

export default AnalysisRunUpdateManyWithWhereWithoutDocumentInputSchema;
