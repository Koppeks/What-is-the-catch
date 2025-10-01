import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentWhereUniqueInputSchema } from './DocumentWhereUniqueInputSchema';
import { DocumentCreateWithoutDocumentRulesInputSchema } from './DocumentCreateWithoutDocumentRulesInputSchema';
import { DocumentUncheckedCreateWithoutDocumentRulesInputSchema } from './DocumentUncheckedCreateWithoutDocumentRulesInputSchema';

export const DocumentCreateOrConnectWithoutDocumentRulesInputSchema: z.ZodType<Prisma.DocumentCreateOrConnectWithoutDocumentRulesInput> = z.object({
  where: z.lazy(() => DocumentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DocumentCreateWithoutDocumentRulesInputSchema),z.lazy(() => DocumentUncheckedCreateWithoutDocumentRulesInputSchema) ]),
}).strict() as z.ZodType<Prisma.DocumentCreateOrConnectWithoutDocumentRulesInput>;

export default DocumentCreateOrConnectWithoutDocumentRulesInputSchema;
