import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentCreateWithoutDocumentRulesInputSchema } from './DocumentCreateWithoutDocumentRulesInputSchema';
import { DocumentUncheckedCreateWithoutDocumentRulesInputSchema } from './DocumentUncheckedCreateWithoutDocumentRulesInputSchema';
import { DocumentCreateOrConnectWithoutDocumentRulesInputSchema } from './DocumentCreateOrConnectWithoutDocumentRulesInputSchema';
import { DocumentWhereUniqueInputSchema } from './DocumentWhereUniqueInputSchema';

export const DocumentCreateNestedOneWithoutDocumentRulesInputSchema: z.ZodType<Prisma.DocumentCreateNestedOneWithoutDocumentRulesInput> = z.strictObject({
  create: z.union([ z.lazy(() => DocumentCreateWithoutDocumentRulesInputSchema), z.lazy(() => DocumentUncheckedCreateWithoutDocumentRulesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DocumentCreateOrConnectWithoutDocumentRulesInputSchema).optional(),
  connect: z.lazy(() => DocumentWhereUniqueInputSchema).optional(),
});

export default DocumentCreateNestedOneWithoutDocumentRulesInputSchema;
