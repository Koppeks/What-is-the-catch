import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AnalysisRunWhereUniqueInputSchema } from './AnalysisRunWhereUniqueInputSchema';
import { AnalysisRunCreateWithoutDocumentInputSchema } from './AnalysisRunCreateWithoutDocumentInputSchema';
import { AnalysisRunUncheckedCreateWithoutDocumentInputSchema } from './AnalysisRunUncheckedCreateWithoutDocumentInputSchema';

export const AnalysisRunCreateOrConnectWithoutDocumentInputSchema: z.ZodType<Prisma.AnalysisRunCreateOrConnectWithoutDocumentInput> = z.object({
  where: z.lazy(() => AnalysisRunWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AnalysisRunCreateWithoutDocumentInputSchema),z.lazy(() => AnalysisRunUncheckedCreateWithoutDocumentInputSchema) ]),
}).strict() as z.ZodType<Prisma.AnalysisRunCreateOrConnectWithoutDocumentInput>;

export default AnalysisRunCreateOrConnectWithoutDocumentInputSchema;
