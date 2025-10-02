import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AnalysisRunWhereUniqueInputSchema } from './AnalysisRunWhereUniqueInputSchema';
import { AnalysisRunCreateWithoutDocumentInputSchema } from './AnalysisRunCreateWithoutDocumentInputSchema';
import { AnalysisRunUncheckedCreateWithoutDocumentInputSchema } from './AnalysisRunUncheckedCreateWithoutDocumentInputSchema';

export const AnalysisRunCreateOrConnectWithoutDocumentInputSchema: z.ZodType<Prisma.AnalysisRunCreateOrConnectWithoutDocumentInput> = z.strictObject({
  where: z.lazy(() => AnalysisRunWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AnalysisRunCreateWithoutDocumentInputSchema), z.lazy(() => AnalysisRunUncheckedCreateWithoutDocumentInputSchema) ]),
});

export default AnalysisRunCreateOrConnectWithoutDocumentInputSchema;
