import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentWhereUniqueInputSchema } from './DocumentWhereUniqueInputSchema';
import { DocumentCreateWithoutDocumentRulesInputSchema } from './DocumentCreateWithoutDocumentRulesInputSchema';
import { DocumentUncheckedCreateWithoutDocumentRulesInputSchema } from './DocumentUncheckedCreateWithoutDocumentRulesInputSchema';

export const DocumentCreateOrConnectWithoutDocumentRulesInputSchema: z.ZodType<Prisma.DocumentCreateOrConnectWithoutDocumentRulesInput> = z.strictObject({
  where: z.lazy(() => DocumentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DocumentCreateWithoutDocumentRulesInputSchema), z.lazy(() => DocumentUncheckedCreateWithoutDocumentRulesInputSchema) ]),
});

export default DocumentCreateOrConnectWithoutDocumentRulesInputSchema;
